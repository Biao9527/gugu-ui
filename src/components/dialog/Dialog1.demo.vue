<demo>
基本
</demo>

<template>
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
</template>

<script>
import Dialog from '../../lib/Dialog.vue';
import Button from '../../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Button, Dialog},
  setup(){
    const visible = ref(false);
    const toggle = () => {
      visible.value = !visible.value;
    };
    const fn1 = () => {
      return false;
    };
    const fn2 = () => {
    };
    return {visible,toggle,fn1,fn2}
  }
};
</script>