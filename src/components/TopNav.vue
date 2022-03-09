<template>
  <div class="topNav">
    <div v-if="listToggle" class="listWrapper" @click="toggleAside">
      <svg class="icon">
        <use xlink:href="#icon-list"></use>
      </svg>
    </div>
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-logo"></use>
      </svg>
    </router-link>
    <router-link v-if="!listToggle" to="/doc" class="file">文档</router-link>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props: ['listToggle'],
  setup() {
    let asideVisible = inject<Ref<boolean>>('asideVisible');
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleAside};
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
  padding: 0 80px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(60, 60, 60, .12);
}
a {
  .icon {
    width: 46px;
    height: 46px;
    vertical-align: -0.15em;
    overflow: hidden;
  }
}
.listWrapper {
  display: none;
}
@media (max-width: 500px) {
  .logo {
    margin: 0 auto;
  }
  .topNav {
    display: flex;
    align-items: center;
    padding: 0 20px;
  }
  .file {
    display: none;
  }
  .listWrapper {
    display: flex;
    position: absolute;
    .icon {
      width: 1.6em;
      height: 1.6em;
      vertical-align: -0.15em;
      overflow: hidden;
    }
  }
}
</style>