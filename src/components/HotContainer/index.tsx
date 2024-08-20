/*
 * @Description: 今日热榜
 * @Version: 2.0
 * @Author: 白雾茫茫丶
 * @Date: 2023-10-30 16:01:49
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2024-04-30 16:30:52
 */
import { Col } from 'antd'
import { add, map } from 'lodash-es'
import { FC } from 'react'

import type { HotListConfig } from '@/types'

import HotList from './HotList'
import styles from './index.module.less'

type HotContainerProps = {
  primaryColor: string;
  hotConfig: HotListConfig[];
  isDark: boolean;
}

const HotContainer: FC<HotContainerProps> = ({ primaryColor, hotConfig = [], isDark }) => {

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(20rem,1fr))', gap: '1.2rem', padding: '0 4vw' }}>
      {
        map(hotConfig, (config: HotListConfig, index: number) => (
          <Col span={24} key={config.value} className={styles['hot-card']} style={{ animationDelay: `${add(add(index, 1) * 0.1, 0.1)}s` }}>
            <HotList {...config} primaryColor={primaryColor} isDark={isDark} />
          </Col>
        ))
      }
    </div>
  )
}
export default HotContainer