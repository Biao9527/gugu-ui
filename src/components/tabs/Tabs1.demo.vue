<demo>
基本
</demo>
<template>
  <Tabs v-model:selected="selected">
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
    <Tab title="导航三">内容三</Tab>
  </Tabs>
</template>

<script>
import Tabs from '../../lib/Tabs.vue';
import Tab from '../../lib/Tab.vue';
import {ref} from 'vue';

export default {
  components: {Tab, Tabs},
  setup(){
    const selected = ref('导航二');
    return {selected}
  }
};
</script>