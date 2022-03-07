<template>
<h2>示例一</h2>
  <Tabs>
    <Tab title="导航一">内容一</Tab>
    <Tab title="导航二">内容二</Tab>
  </Tabs>
</template>
<script>
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
export default {
  components: {Tab, Tabs}
};
</script>