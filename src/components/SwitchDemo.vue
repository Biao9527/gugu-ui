<template>
  <div class="switch-wrapper">
    <h1>Switch 开关</h1>
    <Demo :component="Switch1Demo"/>
    <Demo :component="Switch2Demo"/>
    <Demo :component="Switch3Demo"/>
  </div>
</template>

<script lang="ts">
import Switch1Demo from './switch/Switch1.demo.vue';
import Switch2Demo from './switch/Switch2.demo.vue';
import Switch3Demo from './switch/Switch3.demo.vue';
import Demo from './Demo.vue';

export default {
  components: {Demo},
  setup() {
    return {Switch1Demo, Switch2Demo, Switch3Demo};
  }
};
</script>

<style lang="scss">
.switch-wrapper {
  margin: 0 20px;
}
</style>