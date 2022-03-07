<template>
  <div class="gugu-tabs">
    <div class="gugu-tabs-nav">
      <div class="gugu-tabs-nav-item"
           @click="select(t)"
           :class="selected === t ? 'selected':''"
           v-for="(t,index) in titles" :key="index">{{ t }}</div>
    </div>
    <div class="gugu-tabs-content">
      <component v-for="(d,index) in defaults" :is="d" :key="index"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';

export default {
  props:{
    selected:{
      type:String
    }
  },
  setup(props, context) {
    const defaults = context.slots.default();
    const titles = defaults.map(t => {
      return t.props.title;
    });
    defaults.forEach(t => {
      if (t.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const select = (t)=>{
      context.emit('update:selected',t)
    }
    return {defaults, titles,select};
  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gugu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>