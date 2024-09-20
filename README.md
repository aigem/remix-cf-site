# 软件展示网站

这是一个使用Remix框架和Cloudflare Pages部署的软件展示网站。

## 项目概述

该项目是一个基于Remix框架的应用，用于展示和介绍各种软件产品。它使用Cloudflare Pages进行部署，利用了Tailwind CSS进行样式设计，并配置了TypeScript以提供类型安全。

## 主要特性

- 简洁、现代的设计
- 软件列表展示
- 详细的软件介绍页面
- 响应式布局
- Remix框架
- Cloudflare Pages部署
- Tailwind CSS样式
- TypeScript支持

## 开发环境设置

1. 克隆仓库
2. 安装依赖：
   ```
   npm install
   ```
3. 运行开发服务器：
   ```
   npm run dev
   ```

## 构建和部署

1. 构建项目：
   ```
   npm run build
   ```
2. 部署到Cloudflare Pages：
   ```
   npm run deploy
   ```

## 项目结构

- `/app`: 包含应用程序的主要源代码
- `/public`: 静态资源文件
- `/functions`: Cloudflare Pages函数

## 主要文件说明

- `app/root.tsx`: 应用程序的根组件
- `app/routes/_index.tsx`: 主页路由
- `app/tailwind.css`: Tailwind CSS配置
- `vite.config.ts`: Vite构建配置
- `wrangler.toml`: Cloudflare Wrangler配置

## 脚本命令


```6:14:remix-cf/package.json
  "scripts": {
    "build": "remix vite:build",
    "deploy": "wrangler pages deploy ./build/client",
    "dev": "remix vite:dev",
    "lint": "eslint --ignore-path .gitignore --cache --cache-location ./node_modules/.cache/eslint .",
    "start": "wrangler pages dev ./build/client",
    "typecheck": "tsc",
    "typegen": "wrangler types"
  },
```


## 依赖项

主要依赖项包括：

- @remix-run/cloudflare
- @remix-run/react
- react
- react-dom
- tailwindcss

开发依赖项包括：

- @cloudflare/workers-types
- @remix-run/dev
- typescript
- vite
- wrangler

## 配置文件

- `.eslintrc.cjs`: ESLint配置
- `tsconfig.json`: TypeScript配置
- `tailwind.config.ts`: Tailwind CSS配置
- `postcss.config.js`: PostCSS配置

## 注意事项

- 确保Node.js版本 >= 20.0.0
- 运行`npm run typegen`以生成Cloudflare绑定的类型
- 修改`wrangler.toml`后需要重新运行typegen

## 贡献

欢迎提交问题和拉取请求。

## 许可证

[MIT License](LICENSE)