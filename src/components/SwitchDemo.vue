<template>
  <Switch v-model:value="bool" size="small"/>
  <br>
  <Switch v-model:value="boll2"/>
  <br>
  <Switch v-model:value="boll3" size="big"/>
  <br>
  <Switch v-model:value="boll4" :disabled="true"/>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';
export default {
  components: {Switch},
  setup(){
    const bool = ref<boolean>(false)
    const boll2 = ref<boolean>(false)
    const boll3 = ref<boolean>(false)
    const boll4 = ref<boolean>(true)
    return {bool,boll2,boll3,boll4}
  }
};
</script>