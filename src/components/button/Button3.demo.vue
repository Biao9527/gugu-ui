<demo>
等级
</demo>

<template>
  <div>
    <Button theme="button" level="main">主要按钮</Button>
    <Button theme="button">普通按钮</Button>
    <Button theme="button" level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要链接</Button>
    <Button theme="link">普通链接</Button>
    <Button theme="link" level="danger">危险链接</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要文本</Button>
    <Button theme="text">普通文本</Button>
    <Button theme="text" level="danger">危险文本</Button>
  </div>
</template>

<script>
import Button from '../../lib/Button.vue';

export default {
  components: {Button}
};
</script>