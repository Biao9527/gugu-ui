<demo>
尺寸
</demo>
<template>
  <div>
    <Button theme="button" size="big">大大大</Button>
    <Button theme="button">普通通</Button>
    <Button theme="button" size="small">小小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普通通</Button>
    <Button theme="link" size="small">小小小</Button>
  </div>
  <div>
    <Button theme="text" size="big">大大大</Button>
    <Button theme="text">普通通</Button>
    <Button theme="text" size="small">小小小</Button>
  </div>
</template>

<script>
import Button from '../../lib/Button.vue';

export default {
  components: {Button}
};
</script>