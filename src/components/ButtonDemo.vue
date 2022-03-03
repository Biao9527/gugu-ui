<template>
  <h2>示例一</h2>
  <Button>你好</Button>
  <Button theme="button">你好</Button>
  <Button theme="link">Link</Button>
  <Button theme="text">Text</Button>
  <h2>示例二</h2>
  <Button theme="button" size="big">大大大</Button>
  <Button theme="button">普通通</Button>
  <Button theme="button" size="small">小小小</Button>
  <br>
  <Button theme="link" size="big">大大大</Button>
  <Button theme="link">普通通</Button>
  <Button theme="link" size="small">小小小</Button>
  <br>
  <Button theme="text" size="big">大大大</Button>
  <Button theme="text">普通通</Button>
  <Button theme="text" size="small">小小小</Button>
  <h2>示例三</h2>
  <Button theme="button" level="main">主要按钮</Button>
  <Button theme="button">普通按钮</Button>
  <Button theme="button" level="danger">危险按钮</Button>
  <br>
  <Button theme="link" level="main">主要链接按钮</Button>
  <Button theme="link">普通链接按钮</Button>
  <Button theme="link" level="danger">危险链接按钮</Button>
  <br>
  <Button theme="text" level="main">主要文本按钮</Button>
  <Button theme="text">普通文本按钮</Button>
  <Button theme="text" level="danger">危险文本按钮</Button>
  <h2>示例四</h2>
  <Button theme="button">普通按钮</Button>
  <Button theme="button" :disabled="true">禁用按钮</Button>
  <br>
  <Button theme="link">普通链接按钮</Button>
  <Button theme="link" :disabled="true">禁用链接按钮</Button>
  <br>
  <Button theme="text">普通文本按钮</Button>
  <Button theme="text" :disabled="true">禁用文本按钮</Button>
</template>
<script>
import Button from '../lib/Button.vue';
export default {
  components: {Button},
};
</script>