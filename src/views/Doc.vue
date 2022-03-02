<template>
  <div class="layout">
    <TopNav class="nav" :list-toggle="true"/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档</h2>
        <ol>
          <li >
            <router-link to="/doc/introduce" active-class="selected">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install" active-class="selected">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/quickUse" active-class="selected">快速上手</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch" active-class="selected">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button"  active-class="selected">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog"  active-class="selected">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs"  active-class="selected">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main @click="toggleAside">
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
    const width = document.documentElement.clientWidth;
    const toggleAside = () => {
      if (asideVisible.value && width <= 500) {
        asideVisible.value = !asideVisible.value;
      }
    };
    return {toggleAside, asideVisible};
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
    padding-top: 5.4rem;
    padding-left: 20rem;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;

  > aside {
    flex-shrink: 0;
    border-right: 1px solid #eaecef;
    min-width: 18rem;
    padding: 20px 16px;
    position: fixed;
    top: 3.4rem;
    left: 0;
    height: 100%;
    z-index: 5;
    >h2{
      margin: 0 4px;
    }
    >ol{
      >li{
        margin: 12px 24px;
        >.selected{
          color: #ff852a;
        }
      }
    }
    @media (max-width: 500px) {
      min-width: 12rem;
      background: #ffffff;
    }
  }

  > main {
    flex-grow: 1;
    background: #ffffff;
    overflow: auto;
  }
}
</style>