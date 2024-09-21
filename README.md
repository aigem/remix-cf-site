# 内容展示网站

这是一个使用 Remix 框架和 Cloudflare Pages 部署的内容展示网站。

## 项目概述

该项目是一个基于 Remix 框架的应用,用于展示和介绍各种软件产品。它使用 Cloudflare Pages 进行部署,利用了 Tailwind CSS 进行样式设计,并配置了 TypeScript 以提供类型安全。

## 主要特性

- 简洁、现代的设计
- 软件列表展示
- 详细的软件介绍页面
- 响应式布局
- 国际化支持
- 深色模式
- SEO 优化

## 技术栈

- Remix
- React
- TypeScript
- Tailwind CSS
- Cloudflare Pages
- i18next

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
2. 部署到 Cloudflare Pages：
   ```
   npm run deploy
   ```

## 项目结构

- `/app`: 包含应用程序的主要源代码
- `/public`: 静态资源文件
- `/functions`: Cloudflare Pages 函数

## 配置

项目配置位于 `app/config.ts` 文件中。您可以在此文件中修改网站名称、描述等全局设置。

## 国际化

本项目使用 i18next 进行国际化。翻译文件位于 `app/locales` 目录下。

## API

API 响应由 Cloudflare Workers 处理,位于 `functions/api` 目录下。

## 贡献

欢迎提交问题和拉取请求。

## 许可证

[MIT License](LICENSE)