<template>
  <div class="topNav">
    <div class="logo" @click="toggleAside">LOGO</div>
    <router-link to="/doc">文档</router-link>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup() {
    let asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleAside}
  }
};
</script>

<style lang="scss" scoped>
.topNav {
  background: #ffffff;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 10;
  border-bottom: 1px solid rgba(60, 60, 60, .12);
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
}
</style>