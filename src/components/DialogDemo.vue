<template>
  <Demo :component="Dialog1Demo"/>
  <Demo :component="Dialog2Demo"/>
</template>
<script>
import Dialog1Demo from './dialog/Dialog1.demo.vue';
import Dialog2Demo from './dialog/Dialog2.demo.vue';
import Demo from './Demo.vue';

export default {
  components: {Demo,Dialog1Demo,Dialog2Demo},
  setup() {
    return {Dialog1Demo,Dialog2Demo};
  }
};
</script>