<template>
  <div class="switch-wrapper">
    <h1>Switch 开关</h1>
    <div class="demo">
      <h2>基本</h2>
      <div class="demo-component">
        <Switch v-model:value="bool"/>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
      </div>
    </div>
    <div class="demo">
      <h2>尺寸</h2>
      <div class="demo-component">
        <Switch v-model:value="bool2"/>
        <Switch v-model:value="bool3" size="small"/>
        <Switch v-model:value="bool4" size="big"/>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
      </div>
    </div>
    <div class="demo">
      <h2>不可用状态</h2>
      <div class="demo-component">
        <Switch v-model:value="bool5" :disabled="true"/>
      </div>
      <div class="demo-actions">
        <Button>查看代码</Button>
      </div>
      <div class="demo-code">
        <pre>&lt;Switch v-model:value="bool" /&gt;</pre>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';
import Button from '../lib/Button.vue';

export default {
  components: {Button, Switch},
  setup() {
    const bool = ref<boolean>(false);
    const bool2 = ref<boolean>(false);
    const bool3 = ref<boolean>(false);
    const bool4 = ref<boolean>(false);
    const bool5 = ref<boolean>(false);
    return {bool, bool2, bool3, bool4, bool5};
  }
};
</script>

<style lang="scss">
$border-color: #d9d9d9;
.switch-wrapper {
  margin: 0 20px;
  .demo {
    border: 1px solid $border-color;
    margin: 16px 0 32px;
    > h2 {
      font-size: 20px;
      padding: 8px 16px;
      border-bottom: 1px solid $border-color;
    }
    &-component {
      padding: 16px;
    }
    &-actions {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
    }
    &-code {
      padding: 8px 16px;
      border-top: 1px dashed $border-color;
      > pre {
        line-height: 1.1;
        font-family: Consolas, 'Courier New', Courier, monospace;
        margin: 0;
      }
    }
  }
}
</style>