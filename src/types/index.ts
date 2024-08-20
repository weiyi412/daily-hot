/**
 * @description: 榜单类型
 * @author: 白雾茫茫丶
 */
export type HotTypes =
  'weibo' |
  'bilibili' |
  'douyin' |
  'toutiao' |
  'zhihu' |
  'baidu' |
  'baidutieba' |
  'qq' |
  'juejin' |
  'netease' |
  'lol' |
  'thepaper' |
  'kuaishou' |
  'today' |
  'weread' |
  'douban-movic' |
  'netease-music'

/**
 * @description: 表单子项
 * @author: 白雾茫茫丶
 */
export type HotListItem = {
  id: string; // 唯一 key
  title: string; // 标题
  desc: string; // 描述
  pic: string; // 封面图
  hot: number | string; // 热度
  year?: string; // 年份（历史上的今天）
  score?: number; // 评分（豆瓣电影）
  author?: string; // 作者（音乐）
  duration?: string; // 音乐时长
  url: string; // 地址
  mobileUrl: string; // 移动端地址
  label?: string; // 标签（微博）
}

/**
 * @description: 榜单配置
 * @author: 白雾茫茫丶
 */
export type HotListConfig = {
  value: HotTypes;
  label: string;
  tip: string;
}

/**
 * @description: 更新时间
 * @author: 白雾茫茫丶
 */
export type UpdateTime = Record<HotTypes, number>

/**
 * @description: 主题模式
 * @author: 白雾茫茫丶
 */
export type ThemeName = 'light' | 'dark';