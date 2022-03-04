<template>
  <h2>示例一</h2>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="visible" :close-onclick-overlay="false" :ok="fn1" :cancel="fn2"/>
</template>
<script>
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';
export default {
  components: {Button, Dialog},
  setup(){
    const visible = ref(false)
    const toggle = ()=>{
      visible.value = !visible.value
    }
    const fn1 = ()=>{
      return false
    }
    const fn2 = ()=>{
    }
    return {visible,toggle,fn1,fn2}
  }
};
</script>