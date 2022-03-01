<template>
  <div class="topNav">
    <div v-if="listToggle" class="listWrapper"  @click="toggleAside">
      <Icon name="list"/>
    </div>
    <router-link to="/" class="logo">
      <Icon name="logo"/>
    </router-link>
    <router-link v-if="!listToggle" to="/doc" class="file">文档</router-link>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';
import Icon from './Icon.vue';

export default {
  components: {Icon},
  props:['listToggle'],
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
.icon {
  width: 46px;
  height: 46px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.listWrapper{
  display: none;
}
@media (max-width: 500px) {
  .logo{
    margin: 0 auto;
  }
  .topNav{
    display: flex;
    align-items: center;
    padding: 0 20px;
  }
  .file{
    display: none;
  }
  .listWrapper{
    display: flex;
    position: absolute;
    .icon{
      width: 1.6em;
      height: 1.6em;
      vertical-align: -0.15em;
      overflow: hidden;
    }
  }
}
</style>