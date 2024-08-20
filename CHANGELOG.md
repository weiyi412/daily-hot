

## [1.3.0](https://github.com/baiwumm/react-daily-hot/compare/1.2.0...1.3.0) (2024-05-07)


### ✨ Features | 新功能

* **HotList:** 新增网易云音乐热歌榜 ([9661b47](https://github.com/baiwumm/react-daily-hot/commit/9661b47ab37478f7d117aadad314fe45167c9292))
* update README.md ([86abc8d](https://github.com/baiwumm/react-daily-hot/commit/86abc8d5a6d5cdb1e25852c2db749c3858a1996e))

## [1.2.0](https://github.com/baiwumm/react-daily-hot/compare/1.1.1...1.2.0) (2024-05-07)


### ✨ Features | 新功能

* **HotList:** 新增豆瓣电影（新片榜）接口 ([5e6e590](https://github.com/baiwumm/react-daily-hot/commit/5e6e590017d849debfe2db6bc24d13c05d9c601e))

## [1.1.1](https://github.com/baiwumm/react-daily-hot/compare/1.1.0...1.1.1) (2024-05-06)


### ♻ Code Refactoring | 代码重构

* 新增 ThemeMode 组件，将暗黑模式按钮放到顶部 ([4a51adc](https://github.com/baiwumm/react-daily-hot/commit/4a51adc9ab317bbbce16334b8bbb8ec8367ccc1a))


### ⚡ Performance Improvements | 性能优化

* 主题切换开启 CSS 变量模式 ([39298bb](https://github.com/baiwumm/react-daily-hot/commit/39298bba71f6fda6479b5352eb9b1007e5ba318c))

## [1.1.0](https://github.com/baiwumm/react-daily-hot/compare/1.0.2...1.1.0) (2024-05-06)


### 💄 Styles | 风格

* 去除 SwitchColor 组件的 showText 属性 ([907fdf6](https://github.com/baiwumm/react-daily-hot/commit/907fdf6946b7beb94616f78005866d9f2b712ea4))
* **HotList:** 刷新按钮添加自定义波纹 ([b292854](https://github.com/baiwumm/react-daily-hot/commit/b292854f0790be1eb1e62420725f5f5accbaa125))


### ⚡ Performance Improvements | 性能优化

* 更新 antd 包到最新版本 ([f83043c](https://github.com/baiwumm/react-daily-hot/commit/f83043cd2ee1e9fcb682a349eac1618bd266f767))
* **App:** 优化主题色切换的卡顿问题 ([b50af25](https://github.com/baiwumm/react-daily-hot/commit/b50af25f3fab4c0d432374ce7a75c64e49b52c61))
* **HotList:** 限制榜单刷新间隔时间必须大于1分钟 ([f0dbc71](https://github.com/baiwumm/react-daily-hot/commit/f0dbc71142e07c96d635d014949979274f3e5fea))
* **RealTime:** 优化多个请求时实时时间卡顿的问题 ([ead5238](https://github.com/baiwumm/react-daily-hot/commit/ead52388ae21f7c79c28ced89475e5cc931b42ac))


### 👷‍ Build System | 构建

* Vite 构建分包优化 ([f371c01](https://github.com/baiwumm/react-daily-hot/commit/f371c011e739620343928d25a88ba45eaf2328e9))


### 🔨 CONFIG | 配置

* 修改 release 命令 ([38ff2c1](https://github.com/baiwumm/react-daily-hot/commit/38ff2c173959aaefa6b0b03b807766d58027f912))

## [1.0.2](https://github.com/baiwumm/react-daily-hot/compare/1.0.1...1.0.2) (2024-04-30)


### 💄 Styles | 风格

* 更换首次加载 Loading 占位动画 ([23fa1d5](https://github.com/baiwumm/react-daily-hot/commit/23fa1d5183a8c87702c86006cb29ab5221e5b413))
* **HotList:** 添加热榜卡片进场过渡动画 ([1aa3278](https://github.com/baiwumm/react-daily-hot/commit/1aa3278d814a4b58ee9a07db0715a3d61144fc28))

## 1.0.1 (2024-04-30)


### ✨ Features | 新功能

* 添加 umami 统计，完善版权信息 ([bd37475](https://github.com/baiwumm/react-daily-hot/commit/bd37475adeb6773d8ffea32ee4a8bfdc4c3ae5ed))
* 添加百度统计代码 ([170f706](https://github.com/baiwumm/react-daily-hot/commit/170f70624ab8281d88a13b47e50d16e6643e28b0))
* 新增 HTML 百度站长标签验证 ([00b94b6](https://github.com/baiwumm/react-daily-hot/commit/00b94b69561eeb82c63362db6bb550942eddffd0))
* 新增快手热榜 ([a9eda87](https://github.com/baiwumm/react-daily-hot/commit/a9eda872d188d56ea8298167b3f96fbdf40a0707))
* 新增历史上的今天 ([4e3f385](https://github.com/baiwumm/react-daily-hot/commit/4e3f3851eee9f3c2c919f6a8ac3157da2a436613))
* 优化暗黑模式下的文字颜色显示 ([df670b2](https://github.com/baiwumm/react-daily-hot/commit/df670b2aca862c9820cb5c73b0d893123f20ca18))
* 优化主题切换和暗黑模式下的卡顿问题 ([32ed102](https://github.com/baiwumm/react-daily-hot/commit/32ed10267fe61875161023dc135aebc8c5aff9d5))
* **ActionButtons:** 添加访问博客按钮 ([94ec9d5](https://github.com/baiwumm/react-daily-hot/commit/94ec9d5445c119562e23aacac2eee5a0b4127dd4))
* **App:** 添加微软 Clarity 分析代码 ([e1d8220](https://github.com/baiwumm/react-daily-hot/commit/e1d8220aa212d428dc700284a80f8a18da166257))
* **App:** 完成今日热榜的排版、数据获取、显隐等功能 ([cce606a](https://github.com/baiwumm/react-daily-hot/commit/cce606a2abbb2207ee379b64a5d98686b98a3698))
* **Footer:** 添加 ICP 备案图标 ([340b323](https://github.com/baiwumm/react-daily-hot/commit/340b323530173eaa534c7a4eecee71016feb984f))
* **HotList:** 榜单接口添加防抖、优化代码 ([c002683](https://github.com/baiwumm/react-daily-hot/commit/c002683f7150eb40c15a2ed0952579ea667a20d1))
* **HotList:** 榜单添加热度数据显示 ([35d503f](https://github.com/baiwumm/react-daily-hot/commit/35d503fb5924a13175f99e8ec74d44509db63eeb))
* **HotList:** 标题支持 Tooltip ([4bceaa1](https://github.com/baiwumm/react-daily-hot/commit/4bceaa19797b0dc2793e719d94ab505ceb265adf))
* **HotList:** 标题支持Tooltip ([39bb81c](https://github.com/baiwumm/react-daily-hot/commit/39bb81c51739f3d59208023ebdc6db0f965325f6))
* **HotList:** 判断卡片在可视区域内才加载数据 ([59f921d](https://github.com/baiwumm/react-daily-hot/commit/59f921d028ad05f8b8bb40a723d454aa17b98fbb))
* **HotList:** 判断是否移动端跳转 url ([9c6553a](https://github.com/baiwumm/react-daily-hot/commit/9c6553a0cbfe180a367bc29dd62a8aa8c9c47d2c))
* **hotList:** 新增微信读书飙升榜 ([b9915e3](https://github.com/baiwumm/react-daily-hot/commit/b9915e3c8d2011d9ebc837d296c617b6f5d4657e))
* **index:** 添加 Google tag 分析代码 ([b0b1b69](https://github.com/baiwumm/react-daily-hot/commit/b0b1b695dc9441f4ed292203ace145e5e7256d2a))
* **index:** 添加首屏加载占位 loading 动画 ([503e6f1](https://github.com/baiwumm/react-daily-hot/commit/503e6f17956be9963a0f937d83c9ff899506a90c))
* **Theme:** 添加主题切换功能 ([fea3509](https://github.com/baiwumm/react-daily-hot/commit/fea350929ca405214c6f32c6d6b92e90e40a736a))
* update README.md ([6c98045](https://github.com/baiwumm/react-daily-hot/commit/6c980455c6e8cdd524e3b4e65e3094e8886e1edf))
* update README.md ([a406137](https://github.com/baiwumm/react-daily-hot/commit/a4061375445099f5537f551faf3a084dd8e769ef))


### 🐛 Bug Fixes | Bug 修复

* 修复主题色不回显的问题 ([57e3364](https://github.com/baiwumm/react-daily-hot/commit/57e336459639f8c35da6d73dcf5361cad0a9f844))
* **HotList:** 解决接口返回空数据列表空白的问题 ([738a025](https://github.com/baiwumm/react-daily-hot/commit/738a025eb79021e14a368d10849f4eb603f095d1))


### 📝 Documentation | 文档

* 使用 release-it 自动管理版本号和生成 CHANGELOG ([8849ffe](https://github.com/baiwumm/react-daily-hot/commit/8849ffea092808b96aa0748bdb33ddae09e7986a))
* update README.md ([9c9d27c](https://github.com/baiwumm/react-daily-hot/commit/9c9d27c909b6a1fa520948cb988d25b571ea5fa9))
* update README.md ([a7350ac](https://github.com/baiwumm/react-daily-hot/commit/a7350ac7e933cb930957df48d80cda00da9c1847))


### 💄 Styles | 风格

* CSS 改用 Less，解决 node-sass 与 node 版本不兼容的问题 ([b22f5cf](https://github.com/baiwumm/react-daily-hot/commit/b22f5cf8dc044d59812d3f894a9cfec1e93f70ba))
* **HotList:** 优化接口还未加载时 UI 显示 ([841992b](https://github.com/baiwumm/react-daily-hot/commit/841992b8d60b89892bec371f769afcd0988f52ea))
* **HotList:** 优化内容文案显示 ([df00911](https://github.com/baiwumm/react-daily-hot/commit/df009115f020f4f12c77fcb1fceb572cb89027b0))


### ⚡ Performance Improvements | 性能优化

* **Header:** 优化移动端下的排版 ([fa301bd](https://github.com/baiwumm/react-daily-hot/commit/fa301bdfbf726d75928681504c831f454a263e3b))
* **HotList:** 优化榜单在可视范围内才加载接口 ([e80258e](https://github.com/baiwumm/react-daily-hot/commit/e80258ed89e47756d9cc9b2d47f6cb4635c2ad1c))
* **HotList:** 优化组件渲染性能 ([8c81d7d](https://github.com/baiwumm/react-daily-hot/commit/8c81d7df4b2abfbfbf9b4c1620b2177b49315c90))


### 👷‍ Build System | 构建

* **vercel:** vercel 部署文件配置 ([f6c5d13](https://github.com/baiwumm/react-daily-hot/commit/f6c5d13cdd190bf461f3856c4d1b40d292b460ee))
