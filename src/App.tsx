/*
 * @Description: 入口文件
 * @Version: 2.0
 * @Author: 白雾茫茫丶
 * @Date: 2023-10-30 15:29:07
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2024-05-06 17:46:20
 */
import { useLocalStorageState } from 'ahooks'
import { App, ConfigProvider, Space, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN';
import { eq, filter, includes } from 'lodash-es'
import { useState } from 'react'
import { Helmet } from 'react-helmet'

import ActionButtons from '@/components/ActionButtons'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SwitchColor from '@/components/Header/SwitchColor'
import HotContainer from '@/components/HotContainer'
import ThemeMode from '@/components/ThemeMode'
import { LOCAL_KEY, THEME } from '@/enums'
import type { HotListConfig, HotTypes, ThemeName } from '@/types'
import { getLocalStorageItem } from '@/utils'

import { hotDataSource } from './components/HotContainer/config'

function AppConatiner() {
  // 主题色
  const [primaryColor, setPrimaryColor] = useState(getLocalStorageItem(LOCAL_KEY.PRIMARYCOLOR) || '#1677ff');
  // 主题模式
  const [siteTheme, setSiteTheme] = useLocalStorageState<ThemeName>(
    LOCAL_KEY.THEME,
    { defaultValue: THEME.LIGHT },
  );
  // 是否是暗黑主题
  const isDark = eq(siteTheme, THEME.DARK)
  /**
  * @description: 过滤掉不显示的热榜
  */
  const filterHiddenHot = (): HotListConfig[] => {
    // 不显示的榜单列表
    const hiddenHotList = getLocalStorageItem<HotTypes[]>(LOCAL_KEY.HOTHIDDEN) || [];
    return hiddenHotList.length ? filter(hotDataSource, (config: HotListConfig) => !includes(hiddenHotList, config.value)) : hotDataSource
  }
  const [hotConfig, setHotConfig] = useState<HotListConfig[]>(filterHiddenHot())
  return (
    <>
      <Helmet encodeSpecialCharacters={false}>
        <html lang='zh-CN' data-theme={siteTheme} />
      </Helmet>
      <ConfigProvider locale={zhCN} theme={{
        cssVar: true, // 开启 CSS 变量模式
        hashed: false, // 关闭 hash 减小样式体积
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: primaryColor,
        },
        components: {
          List: {
            itemPaddingSM: '8px 0'
          },
          Result: {
            iconFontSize: 30,
            titleFontSize: 16,
            subtitleFontSize: 12
          }
        }
      }}>
        <App>
          {/* 头部布局 */}
          <Header>
            <Space>
              {/* 主题色切换 */}
              <SwitchColor primaryColor={primaryColor} setPrimaryColor={setPrimaryColor} />
              {/* 暗黑模式切换 */}
              <ThemeMode isDark={isDark} setSiteTheme={setSiteTheme} />
            </Space>
          </Header>
          {/* 今日热榜 */}
          <HotContainer primaryColor={primaryColor} hotConfig={hotConfig} isDark={isDark} />
          {/* 底部版权 */}
          <Footer />
          {/* 悬浮按钮 */}
          <ActionButtons setHotConfig={setHotConfig} filterHiddenHot={filterHiddenHot} />
        </App>
      </ConfigProvider>
    </>
  )
}

export default AppConatiner
