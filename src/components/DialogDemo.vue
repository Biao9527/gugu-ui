<template>
  <div class="dialog-wrapper">
  <h1>Dialog 对话框</h1>
  <Demo :component="Dialog1Demo"/>
    <Demo :component="Dialog2Demo"/>
  </div>
</template>
<script>
import Dialog1Demo from './dialog/Dialog1.demo.vue';
import Dialog2Demo from './dialog/Dialog2.demo.vue';
import Demo from './Demo.vue';

export default {
  components: {Demo},
  setup() {
    return {Dialog1Demo,Dialog2Demo};
  }
};
</script>

<style lang="scss">
.dialog-wrapper{
  margin: 0 20px;
}
</style>