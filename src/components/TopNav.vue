<template>
  <div class="topNav">
    <router-link to="/" class="xxx">
      <Icon name="logo"/>
    </router-link>
    <router-link to="/doc">文档</router-link>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';
import Icon from './Icon.vue';

export default {
  components: {Icon},
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
  padding: 0 30px;
  position: relative;
  z-index: 10;
  border-bottom: 1px solid rgba(60, 60, 60, .12);
}

.icon {
  width: 36px;
  height: 36px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;}
</style>