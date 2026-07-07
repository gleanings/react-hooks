# react-hooks

[![version](<https://img.shields.io/npm/v/@vvi/react-hooks.svg?logo=npm&logoColor=rgb(0,0,0)&label=版本号&labelColor=rgb(73,73,228)&color=rgb(0,0,0)>)](https://www.npmjs.com/package/@vvi/react-hooks) [![issues 提交](<https://img.shields.io/badge/issues-提交-rgb(255,0,63)?logo=github>)](https://github.com/MrMudBean/react-hooks/issues)
  
业务无关的 hooks 。

## 安装

```bash
npm install --save @vvi/react-hooks

# pnpm
pnpm add --save @vvi/react-hooks

# yarn
yarn add --save @vvi/react-hooks
```

## 使用

提供了几个简单的与业务无关的用于把玩的 react hooks ：

- **`useTimeId`** ：一个 `useRef` 数值，可用于储存 `setTimeout`、`setInterval` 的返回值，自动在卸载时调用 `clearTimeout(id.current)`
- **`useInputIsComposing`** ： 储存了当前绑定了 ref 的输入框是否完成了输入的 `usrRef` 数据。可在桌面端设备上中文输入判定是否完成输入选择
- **`useAnimationFrame`** ：一个 `useRef` 数据，数据储存了 `requestAnimationFrame`
- **`useRipples`** ：一个 `useRef` 数据。储存了 [Ripples](https://www.npmjs.com/package/@vvi/ripple) 实例
- **`useLazyRipples`** ：一个 `useRef` 数据，储存了 [Ripple](https://www.npmjs.com/package/@vvi/ripple) 实例

## 状态

此软件包是 `MrMudBean` 生态系统的一部分。
它使用严格的 TypeScript 编写，并通过 Rollup 构建进行验证。
虽然单元测试较少，但 API 稳定，并在生产环境中大量使用。
