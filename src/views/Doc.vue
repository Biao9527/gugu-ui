<template>
  <div class="layout">
    <TopNav class="nav"/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/button">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">快速上手</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {TopNav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible};
  }
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 3.4rem;
    padding-left: 20rem;
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
    border-right: 1px solid #eaecef;
    width: 20rem;
    padding: 0 16px;
    position: fixed;
    top: 3.6rem;
    left: 0;
    height: 100%;
    z-index: 5;
  }
  > main {
    flex-grow: 1;
    background: #ffffff;
    overflow: auto;
  }
}
</style>