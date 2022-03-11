# 咕咕 UI

- 这是一个基于 Vue3 / TypeScript / Scss 开发的UI库，涵盖了 Button、Switch ... 等常见 UI 组件。

- 官网：https://biao9527.github.io/gugu-ui-website/

## 使用方法
### 安装
在项目中，使用终端执行以下命令
```
npm install gugu-ui
```
或者
```
yarn add gugu-ui
```
### 引入
```
import {Button, Tabs, Tab, Switch, Dialog. openDialog} from "crisps-ui";
//若发现样式不生效，可手动引入scss
import "crisps-ui/dist/lib/crisps.css";
```
### 示例
```
<template>
    <Button>按钮</Button>
</template>

<script>
import {Button,Switch,openDialog,Tabs,Tab} from 'gugu-ui'

components: {Button,Switch,Tabs,Tab}
</script>
```