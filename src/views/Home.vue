<template>
  <div>
    <TopNav :list-toggle="false"/>
    <div class="banner" >
      <h1>咕咕 UI</h1>
      <h2>一款 相当厉害 的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
      <div class="features">
        <ul>
          <li>
            <Icon name="vue"/>
            <h2>
            基于 Vue3
            </h2>
            <span>骄傲的使用了Vue 3 Composition API</span>
          </li>
          <li>
            <Icon name="ts"/>
            <h2>基于 TypeScript</h2>
            <span>源代码采用 TypeScript 书写（非严格检查）</span>
          </li>
          <li>
            <Icon name="light"/>
            <h2>代码易读</h2>
            <span>每个组件的源代码都极其简洁</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from '../components/TopNav.vue';
import Icon from '../components/Icon.vue';
import {inject, Ref} from 'vue';

export default {
  components: {Icon, TopNav}
};
</script>
<style lang="scss" scoped>
.banner {
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffffff;

  > h2 {
    padding-top: 20px;
  }

  > .actions {
    padding: 20px;

    a {
      height: 40px;
      display: inline-block;
      margin: 0 8px;
      background: #F1f1f1;
      padding: 8px 24px;
      border-radius: 8px;
      color: #476582;

      &:hover {
        color: #ff852a;
      }
    }
  }

  .features {
    margin-top: 70px;
    color: #888888;
    > ul {
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      > li {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 60px;
        >h2{
          margin-top: 10px;
        }
        > .icon {
          width: 100px;
          height: 100px;
          vertical-align: -0.15em;
          overflow: hidden;
          fill: #888888;
        }
        > span{
          text-align: center;
        }
      }
    }
  }
}
</style>