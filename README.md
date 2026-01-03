# vue-oj-bsystem

这是一个基于 Vue 3 和 Vite 构建的项目模板，适用于开发在线评测系统（OJ 系统）的前端部分。

## 推荐开发环境配置

- 编辑器：[VSCode](https://code.visualstudio.com/)
- 插件：[Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)（请禁用 Vetur）

## 项目配置说明

如需自定义构建配置，请参考 [Vite 配置文档](https://vite.dev/config/)。

## 项目初始化步骤

```sh
npm install
```

### 开发环境运行（支持热重载）

```sh
npm run dev
```

### 生产环境构建（压缩优化）

```sh
npm run build
```

## 项目结构说明

- `src/api/`：封装 API 请求模块，如用户、考试、题目等接口。
- `src/components/`：可复用的 Vue 组件，如题目选择器、代码编辑器等。
- `src/utils/`：工具类代码，如 Cookie 操作、请求封装等。
- `src/views/`：页面视图组件，如登录页、考试页、题目管理页等。
- `src/router/index.js`：前端路由配置。
- `src/main.js`：项目入口文件，初始化 Vue 应用。
- `public/favicon.ico`：网页图标。
- `index.html`：项目主 HTML 文件，定义页面结构。
- `vite.config.js`：Vite 构建配置文件。

## 项目用途

该项目是为在线编程竞赛平台设计的前端系统，支持用户登录、考试管理、题目展示及代码提交等功能。

如需进一步定制功能或对接后端接口，请参考 `src/api` 中的模块实现。