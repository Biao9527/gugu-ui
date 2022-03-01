<template>
  <svg :class="svgClass" v-bind="$attrs">
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
const svgClass = computed(()=> {
  console.log(props.name, 'props.name');
  if (props.name) {
    return `icon ${props.name}`
  }
  return 'svg-icon'
});
</script>

<style lang='scss'>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  overflow: hidden;
}
</style>
