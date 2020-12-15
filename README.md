# 🌈 vue-image-dangling

A Vue image component. Dangling interaction effect

[![npm](https://img.shields.io/npm/v/vue-image-dangling?style=flat-square&color=orange)](https://www.npmjs.com/package/vue-image-dangling) ![test-ci](https://github.com/image-component/vue-image-dangling/workflows/test-ci/badge.svg) ![](https://img.shields.io/github/last-commit/image-component/vue-image-dangling/main?color=%23722ed1&style=flat-square) ![](https://img.shields.io/npm/dt/vue-image-dangling?color=%23eb2f96&style=flat-square) ![](https://img.shields.io/npm/l/vue-image-dangling?style=flat-square&color=red)

## 📚 Example

Online: https://image-component.github.io/vue-image-dangling/

## 🌀 Template

https://github.com/one-template/vue-component-template

## 📦 Install

```bash
npm i vue-image-dangling
# or
yarn add vue-image-dangling
```

## 🎉 Usage

```js
// main.js
import ImageDangling from 'vue-image-dangling'
Vue.component('image-dangling', ImageDangling)
```

## 📔 API

| Property   | Description                                                                                                                                                                        | Type              | Required | Default | Version |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | -------- | ------- | ------- |
| alt        | The alt of the image.                                                                                                                                                              | string            | ✖        | -       | 1.0.0   |
| blendMode  | Whether to enable `mix-blend-mode`.<br/> When set `true`, the default is `soft-light`. More see [mix-blend-mode](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode). | boolean \| string | ✖        | false   | 1.0.0   |
| className  | Component extra class.                                                                                                                                                             | string            | ✖        | -       | 1.0.0   |
| hoverScale | The hover scale of the image. Require `>= 1 && <=5`.                                                                                                                               | number            | ✖        | 2       | 1.0.0   |
| hoverSlope | The hover slope of the image. Require `>= 10 && <=90`.                                                                                                                             | number            | ✖        | 60      | 1.0.0   |
| radius     | The border radius of the component.                                                                                                                                                | number            | ✖        | 8       | 1.0.0   |
| src        | The src of the image.                                                                                                                                                              | string            | ✔        | -       | 1.0.0   |
| width      | The width of the image.                                                                                                                                                            | number            | ✖        | 300     | 1.0.0   |

## 🔨 Development

```bash
yarn
yarn start
```

## License

[MIT](https://github.com/image-component/vue-image-dangling/blob/main/LICENSE)
