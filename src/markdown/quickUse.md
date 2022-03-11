# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Tabs, Switch, Dialog} from "gugu-ui"
import 'gugu-ui/dist/lib/gugu.css'
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
    <Button>按钮</Button>
</template>

<script>
import {Button,Switch,openDialog,Tabs,Tab} from 'gugu-ui'

components: {Button,Switch,Tabs,Tab}
</script>
```