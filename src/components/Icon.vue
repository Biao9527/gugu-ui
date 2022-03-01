<template>
  <svg class="icon" v-bind="$attrs">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script setup>


import { defineProps, computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true
  },
})

const iconName = computed(()=>`#icon-${props.name}`);
</script>

<style lang='scss'>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>
