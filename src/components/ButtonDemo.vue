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
</template>
<script>
import Button from '../lib/Button.vue';
export default {
  components: {Button},
};
</script>