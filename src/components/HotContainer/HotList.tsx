/*
 * @Description: 热榜列表
 * @Version: 2.0
 * @Author: 白雾茫茫丶
 * @Date: 2023-10-30 16:01:49
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2024-05-07 14:51:02
*/
import 'dayjs/locale/zh-cn'

import { HappyProvider } from '@ant-design/happy-work-theme';
import { SyncOutlined } from '@ant-design/icons'
import { useDebounceFn, useInterval, useInViewport, useRequest, useUnmount } from 'ahooks'
import { Button, Card, Empty, Image, message, Result, Row, Skeleton, Space, Tag, Tooltip, Typography } from 'antd'
import dayjs from 'dayjs'
// 引入处理相对时间的插件
import relativeTime from 'dayjs/plugin/relativeTime'
import { add, eq, get, map, subtract } from 'lodash-es'
import { FC, ReactNode, useEffect, useMemo, useRef, useState } from 'react'

import { LOCAL_KEY } from '@/enums'
import type { HotListConfig, HotListItem, UpdateTime } from '@/types'
import { formatNumber, getLocalStorageItem, setLocalStorageItem } from '@/utils'

import { hotTagColor, weiboLable } from './config'
import styles from './index.module.less'
const { Text } = Typography
// 配置使用处理相对时间的插件
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

type HotListProps = {
  primaryColor: string;
  isDark: boolean;
}

const HotList: FC<HotListConfig & HotListProps> = ({ value, label, tip, primaryColor, isDark = false }) => {
  // 实时更新时间
  const [relativeTime, setRelativeTime] = useState<string>('');
  // 观察元素是否在可见区域
  const ref = useRef(null);
  const [inViewport] = useInViewport(ref);
  // message Api
  const [messageApi, contextHolder] = message.useMessage();

  /**
   * @description: 请求榜单接口
   */
  const { data, loading, run } = useRequest(async () => {
    const response = await fetch(`https://api.baiwumm.com/hot/${value}`)
    if (eq(response.status, 200)) {
      const result = await response.json()
      const updateTime = getLocalStorageItem<UpdateTime>(LOCAL_KEY.UPDATETIME);
      if (updateTime) {
        setLocalStorageItem(LOCAL_KEY.UPDATETIME, { ...updateTime, [value]: dayjs().valueOf() })
      } else {
        setLocalStorageItem(LOCAL_KEY.UPDATETIME, { [value]: dayjs().valueOf() })
      }
      return result.data || []
    }
    return []
  }, {
    manual: true,
    // 防抖等待时间, 单位为毫秒，设置后，进入防抖模式
    debounceWait: 300,
    // 错误重试次数。如果设置为 -1，则无限次重试。
    retryCount: 3
  })

  /**
   * @description: 渲染头部
   */
  const renderTitle = useMemo(() => (
    <div>
      <Row style={{ justifyContent: 'space-between' }}>
        <Space align='center'>
          <Image src={`/${value}.svg`} alt={label} width={20} height={20} preview={false} />
          <Text>{label}</Text>
        </Space>
        <Tag bordered={false} color={primaryColor} style={{ fontSize: 12, marginInlineEnd: 0 }}>{tip}</Tag>
      </Row>
    </div>
  ), [primaryColor])

  /**
   * @description: 渲染主体
   */
  const renderContent = useMemo(() => {
    // 还未加载时的状态
    if (!data) {
      return (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="各位看官，暂无数据哟🤔" imageStyle={{ marginTop: '35%' }} />
      )
    }
    return (
      data?.list?.length ? (
        <ul className={styles['hot-container']}>
          {map(get(data, 'list', []), (item: HotListItem, index: number) => {
            const hasWeiboLabel: boolean = eq(value, 'weibo') && item.label;
            // 渲染右侧信息
            const renderRight = (value: string | number) => (
              <div className='hot-number' style={{
                color: !isDark ? 'rgba(0, 0, 0, 0.45)' : 'inherit'
              }}>{value}</div>
            )
            // 判断是否是历史上的今天
            const isToday = eq(value, 'today');
            // 判断是否是网易云音乐
            const isNeteaseMusic = eq(value, 'netease-music');
            // 渲染标题
            const title = isNeteaseMusic ? `${item.title}【${item.author}】` : item.title;
            return (
              <li key={item.id} className={styles['hot-container-item']} style={{ animationDelay: `${add(index, 1) * 0.1}s` }}>
                <div className='hot-box'>
                  <div
                    className="hot-index"
                    style={{
                      background: hasWeiboLabel && item.label ? weiboLable[item.label] : (hotTagColor[index] || (isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0,0,0,.04)')),
                      color: !isDark && (weiboLable[item.label || ''] || hotTagColor[index]) ? '#ffffff' : 'inherit'
                    }}>
                    {hasWeiboLabel ? item.label : index + 1}
                  </div>
                  <Text
                    className="hot-title"
                    ellipsis={{ tooltip: title }}
                    onClick={() => window.open(item.url)}
                  >
                    {title}
                  </Text>
                  {/* 热度 */}
                  {item.hot && renderRight(formatNumber(item.hot))}
                  {/* 历史上的今天显示年份 */}
                  {isToday && renderRight(`${item.year}年`)}
                  {/* 音乐显示时长 */}
                  {isNeteaseMusic && item.duration && renderRight(item.duration)}
                </div>
              </li>
            )
          })}
        </ul>
      ) : (
        <Result
          status="error"
          title="加载失败"
          subTitle="抱歉，可能服务器遇到问题了，请稍后重试，或者打开右下角设置关闭热榜显示！🤓"
        />
      )
    )
  }, [data, isDark])

  /**
   * @description: 刷新按钮回调
   */
  const { run: refresh } = useDebounceFn(
    () => {
      const updateTime = getLocalStorageItem<UpdateTime>(LOCAL_KEY.UPDATETIME);
      // 60s 内不允许刷新
      const seconds = dayjs().diff(updateTime?.[value], 'second');
      if (seconds >= 60 || !data?.list?.length) {
        run();
      } else {
        messageApi.open({
          type: 'warning',
          content: `刷新间隔不能小于1分钟，请${subtract(60, seconds)}秒后再刷新`,
        });
      }
    },
    {
      wait: 350,
    },
  );

  /**
   * @description: 渲染底部
   */
  const renderFooter = (): ReactNode[] => {
    return [
      <Text type="secondary" style={{ fontSize: 12 }} key="update">
        {relativeTime ? `${relativeTime}更新` : '正在加载中...'}
      </Text>,
      <Tooltip title="获取最新">
        <HappyProvider>
          <Button type="primary" shape="round" icon={<SyncOutlined spin={loading} />} size="small" onClick={refresh} />
        </HappyProvider>
      </Tooltip>
    ]
  }

  const clearInterval = useInterval(() => {
    const updateTime = getLocalStorageItem<UpdateTime>(LOCAL_KEY.UPDATETIME);
    // 更新文案
    const updateText = updateTime ? dayjs(updateTime[value]).fromNow() : dayjs().fromNow()
    setRelativeTime(updateText)
  }, 1000)

  useUnmount(() => {
    clearInterval();
  })

  // 只在可视范围内才加载数据
  useEffect(() => {
    if (!data && inViewport) {
      run();
    }
  }, [inViewport])
  return (
    <Card
      title={renderTitle}
      actions={renderFooter()}
      hoverable
      ref={ref}
      styles={{
        header: {
          padding: '0 15px'
        },
        body: {
          height: 300,
          overflow: 'hidden scroll',
          padding: '5px 15px'
        }
      }}
    >
      {contextHolder}
      <Skeleton active loading={loading} paragraph={{ rows: 10 }}>
        {renderContent}
      </Skeleton>
    </Card>
  )
}
export default HotList