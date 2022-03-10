<demo>
一键打开
</demo>

<template>
  <Button @click="showDialog">toggle</Button>
</template>

<script>
import Button from '../../lib/Button.vue';
import {openDialog} from '../../lib/openDialog';

export default {
  components: {Button},
  setup() {
    const showDialog = () => {
      openDialog({
        title: '标题',
        content: '你好',
        closeOnclickOverlay: false,
        ok() {
          console.log('ok');
          return false;
        },
        cancel() {
          console.log('cancel');
        }
      });
    };
    return {showDialog};
  }
};
</script>