<demo>
基本
</demo>

<template>
  <Switch v-model:value="bool"/>
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
};
</script>