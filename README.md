# react示例

## tailwind中的preflight

preflight插件主要作用是重置和规范浏览器的默认样式，确保在不同浏览器中有一致的渲染效果。在与primereact设置为false时是为了**按需**加载。

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
}
```

## vite

vite是一个面向现代浏览器的革命性前端构建工具，其设计目标是提供快速的开发和构建速度。Vite 是由尤雨溪（Evan You）创建的，也是 Vue.js 的作者。
