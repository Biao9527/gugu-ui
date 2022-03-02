<template>
  <div class="switchWrapper">
    <h2>Switch 开关</h2>
    <ul>
      <li>
          <h3>基本</h3>
          <div>
            <Switch v-model:value="bool"/>
          </div>
          <button>查看代码</button>
      </li>
      <li>
          <h3>尺寸</h3>
          <div>
            <Switch v-model:value="bool2"/>
            <Switch v-model:value="bool3" size="small"/>
            <Switch v-model:value="bool4" size="big"/>
          </div>
          <button>查看代码</button>
      </li>
      <li>
          <h3>不可用状态</h3>
          <div>
            <Switch v-model:value="bool5" :disabled="true"/>
          </div>
          <button>查看代码</button>
      </li>
    </ul>

  </div>
  <br>
  <br>
  <br>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {Switch},
  setup() {
    const bool = ref<boolean>(false);
    const bool2 = ref<boolean>(false);
    const bool3 = ref<boolean>(false);
    const bool4 = ref<boolean>(false);
    const bool5 = ref<boolean>(false);
    return {bool, bool2, bool3, bool4,bool5};
  }
};
</script>

<style lang="scss">
.switchWrapper{
  >h2{
    padding-left: 100px;
  }
  >ul{
    >li{
      padding: 20px 100px;
      border-bottom: 1px solid #eaecef;
    }
  }
}
</style>