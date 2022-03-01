<template>
  <div class="topNav">
    <router-link to="/" class="xxx">
      <Icon name="logo"/>
    </router-link>
    <router-link to="/doc" class="file">文档</router-link>
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
  padding: 0 80px;
  position: relative;
  z-index: 10;
  border-bottom: 1px solid rgba(60, 60, 60, .12);
}
.icon {
  width: 46px;
  height: 46px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
@media (max-width: 500px) {
  .topNav{
    display: flex;
    justify-content: center;
    align-items: center;
    >.file{
      display: none;
    }
  }
}
</style>