<template>
  <Switch v-model:value="bool" :disabled="true"/>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';
export default {
  components: {Switch},
  setup() {
    const bool = ref<boolean>(false);
    return {bool};
  }
}
</script>