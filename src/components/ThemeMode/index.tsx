/*
 * @Author: 白雾茫茫丶<baiwumm.com>
 * @Date: 2024-05-06 15:08:19
 * @LastEditors: 白雾茫茫丶<baiwumm.com>
 * @LastEditTime: 2024-05-06 17:36:33
 * @Description: 亮暗模式切换
 */
import { MoonOutlined, SunOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd'
import { FC } from 'react';

import { THEME } from '@/enums'
import type { ThemeName } from '@/types'

type ThemeModeProps = {
  isDark: boolean;
  setSiteTheme: (value: ThemeName) => void;
}

const ThemeMode: FC<ThemeModeProps> = ({ isDark, setSiteTheme }) => {
  /**
   * @description: 切换主题
   */
  const onChangeTheme = () => {
    setSiteTheme(isDark ? THEME.LIGHT : THEME.DARK)
  }
  return (
    <Tooltip title={`${isDark ? '白天' : '暗黑'}模式`}>
      <Button icon={isDark ? <MoonOutlined /> : <SunOutlined />} onClick={onChangeTheme} />
    </Tooltip>
  )
}
export default ThemeMode;

