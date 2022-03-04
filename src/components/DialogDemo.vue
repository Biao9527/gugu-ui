<template>
  <h2>示例一</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog
    v-model:visible="visible"
    :close-onclick-overlay="false"
    :ok="fn1"
    :cancel="fn2">
    <template v-slot:title>
      <strong>标题</strong>
    </template>
    <template v-slot:content>
      <div>hi</div>
      <div>hi2</div>
    </template>
  </Dialog>
  <h2>示例二</h2>
  <Button @click="showDialog">show</Button>
</template>
<script>
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {h, ref} from 'vue';
import {openDialog} from '../lib/openDialog';

export default {
  components: {Button, Dialog},
  setup() {
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const fn1 = () => {
      return false;
    };
    const fn2 = () => {
    };
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        closeOnclickOverlay:false,
        ok(){
          console.log('ok');
          return false
        },
        cancel(){
          console.log('cancel');
        }
      })
    }
    return {visible, toggle, fn1, fn2,showDialog};
  }
};
</script>