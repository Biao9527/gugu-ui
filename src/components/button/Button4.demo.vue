<demo>
不可选状态
</demo>

<template>
  <div>
    <Button theme="button">普通按钮</Button>
    <Button theme="button" :disabled="true">禁用按钮</Button>
  </div>
  <div>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" disabled>禁用链接按钮</Button>
  </div>
  <div>
    <Button theme="text">普通文本按钮</Button>
    <Button theme="text" disabled>禁用文本按钮</Button>
  </div>
</template>

<script>
import Button from '../../lib/Button.vue';

export default {
  components: {Button}
};
</script>