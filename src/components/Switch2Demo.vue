
<template>
  <Switch v-model:value="bool1"/>
  <Switch v-model:value="bool2" size="small"/>
  <Switch v-model:value="bool3" size="big"/>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';
export default {
  components: {Switch},
  setup() {
    const bool1 = ref<boolean>(false);
    const bool2 = ref<boolean>(false);
    const bool3 = ref<boolean>(false);
    return {bool1,bool2,bool3};
  }
}
</script>