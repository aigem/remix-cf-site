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

## 配置和部署

1. 在 `config.ts` 文件中，根据您的需求修改配置项。

2. 特别注意以下配置项：
   - `SITE_NAME`: 设置您的网站名称
   - `SITE_URL`: 设置您的网站 URL
   - `API_BASE_URL`: 设置您的 API 基础 URL

3. 部署到 Cloudflare Pages 时，确保在环境变量中设置 `NODE_VERSION=20.0.0` 或更高版本。

## API 使用教程

1. API 端点位于 `functions/api` 目录下。

2. 要添加新的 API 端点，在 `functions/api` 目录下创建新的 .js 文件。

3. API 使用示例：

   ```javascript
   export async function onRequest(context) {
     // 处理请求
     return new Response(JSON.stringify(data), {
       headers: { "Content-Type": "application/json" },
     });
   }
   ```

4. 在前端使用 API：

   ```typescript
   const response = await fetch(`${CONFIG.API_BASE_URL}/endpoint`);
   const data = await response.json();
   ```

注意事项：
- 确保所有 API 请求都使用 `CONFIG.API_BASE_URL`。
- 处理 API 错误和异常情况。
- 考虑实现 API 速率限制和缓存策略。

## TODO

1. SEO优化：
   - [ ] 在每个页面添加更多的元标签
   - [ ] 使用 CONFIG 中的设置来优化 SEO

2. 性能优化：
   - [ ] 使用 React.lazy 和 Suspense 实现代码分割
   - [ ] 优化移动设备上的性能表现

3. 安全性：
   - [ ] 在 CONFIG 中添加 CSP (Content Security Policy) 设置

4. 可访问性：
   - [ ] 添加更多的 ARIA 属性，确保网站对所有用户都是可访问的

5. 测试：
   - [ ] 添加单元测试
   - [ ] 添加集成测试

6. 用户功能：
   - [ ] 实现用户认证和授权系统
   - [ ] 添加个性化功能

7. 管理功能：
   - [ ] 实现管理后台
   - [ ] 添加软件信息更新功能
   - [ ] 添加用户评论管理功能

8. 搜索功能：
   - [ ] 实现软件搜索功能

9. API 优化：
   - [ ] 考虑使用 GraphQL 替代 REST API

10. 用户互动：
    - [ ] 实现软件评分系统
    - [ ] 完善评论系统

11. 分类系统：
    - [ ] 添加软件分类功能
    - [ ] 实现标签系统

12. 应用优化：
    - [ ] 实现 PWA（渐进式 Web 应用）

13. 数据分析：
    - [ ] 添加用户行为分析功能
    - [ ] 实现软件受欢迎程度分析

## 贡献

欢迎提交问题和拉取请求。

## 许可证

[MIT License](LICENSE)