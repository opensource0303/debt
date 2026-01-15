# 债权交易平台官网

## 项目介绍
这是一个专业的债权交易平台官网，主要用于品牌介绍、服务展示和客户联系。网站采用现代化设计，包含首页、关于我们、服务内容、核心优势、新闻动态和联系我们等模块。

## 技术栈
- React 18+
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion (动画效果)
- React Router DOM (路由)
- Sonner (消息提示)

## 快速开始

### 安装依赖
```bash
npm install
# 或
pnpm install
```

### 开发模式
```bash
npm run dev
# 或
pnpm dev
```
项目将在 http://localhost:3000 启动开发服务器

### 构建生产版本
```bash
npm run build
# 或
pnpm build
```
构建后的文件将生成在 `dist` 目录中

## 部署指南

### 方法一：手动部署
1. 首先构建生产版本
   ```bash
   npm run build
   # 或
   pnpm build
   ```

2. 将 `dist` 目录中的所有文件上传到您的Web服务器或托管平台

### 方法二：使用第三方托管服务
以下是几个常用的托管平台及其部署指南：

#### Vercel
1. 访问 [Vercel](https://vercel.com/) 并登录
2. 点击 "New Project"
3. 导入您的Git仓库
4. Vercel将自动检测项目配置并进行部署

#### Netlify
1. 访问 [Netlify](https://www.netlify.com/) 并登录
2. 点击 "Add new site" > "Import an existing project"
3. 连接您的Git仓库
4. 配置构建命令为 `npm run build` 和发布目录为 `dist`
5. 点击 "Deploy site"

#### GitHub Pages
1. 安装 `gh-pages` 包
   ```bash
   npm install gh-pages --save-dev
   # 或
   pnpm add gh-pages -D
   ```

2. 在 `package.json` 中添加以下脚本
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. 运行部署命令
   ```bash
   npm run deploy
   # 或
   pnpm deploy
   ```

## 项目结构
```
src/
├── components/      # React组件
│   ├── About.tsx    # 关于我们模块
│   ├── Advantages.tsx # 核心优势模块
│   ├── Contact.tsx  # 联系我们模块
│   ├── Footer.tsx   # 页脚组件
│   ├── Hero.tsx     # 首页英雄区
│   ├── Navbar.tsx   # 导航栏组件
│   ├── News.tsx     # 新闻动态模块
│   └── Services.tsx # 服务内容模块
├── contexts/        # 上下文
├── hooks/           # 自定义钩子
├── lib/             # 工具函数
├── pages/           # 页面组件
│   └── Home.tsx     # 首页
├── App.tsx          # 应用入口组件
├── main.tsx         # 程序入口文件
└── index.css        # 全局样式
```

## 主题切换
网站支持浅色/深色主题切换，主题设置会保存在本地存储中。

## 响应式设计
网站采用响应式设计，适配桌面端、平板和移动设备。