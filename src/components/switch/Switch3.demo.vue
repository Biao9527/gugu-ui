<demo>
不可选状态
</demo>

<template>
  <Switch v-model:value="bool" :disabled="true"/>
</template>

<script lang="ts">
import Switch from '../../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {Switch},
  setup() {
    const bool = ref(false);
    return {bool};
  }
}
</script>