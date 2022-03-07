<template>
  <div class="gugu-tabs">
    <div class="gugu-tabs-nav" ref="container">
      <div class="gugu-tabs-nav-item"
           @click="select(t)"
           :class="{
             selected:selected === t.title,
             'gugu-tabs-nav-item-disabled':t.disabled
           }"
           v-for="(t,index) in titles" :key="index"
           :ref="el => { if (t.title===selected) selectedItem = el }">{{ t.title }}
      </div>
      <div class="gugu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="gugu-tabs-content">
      <component :is="current" :key="selected"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {computed, onMounted, onUpdated, ref, watchEffect} from 'vue';

export default {
  props: {
    selected: {
      type: String
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const defaults = context.slots.default();
    onMounted(() => {
      watchEffect(() => {
        const {width, left: left2} = selectedItem.value.getBoundingClientRect();
        indicator.value.style.width = width + 'px';
        const {left: left1} = container.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + 'px';
      });
    });
    const titles = defaults.map(t => {
      if (t.props.disabled) {
        return {title: t.props.title, disabled: true};
      } else {
        return {title: t.props.title, disabled: false};
      }
    });
    defaults.forEach(t => {
      if (t.type !== Tab) {
        throw new Error('Tabs 子标签必须是 Tab');
      }
    });
    const current = computed(() => {
      return defaults.find(tag => tag.props.title === props.selected);
    });
    const select = (t) => {
      if (!t.disabled) {
        context.emit('update:selected', t.title);
      }
    };
    return {defaults, titles, select, current, selectedItem, indicator, container};
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
    position: relative;
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
      &-disabled {
        color: #bec8c8;
        &:hover {
          cursor: not-allowed;
        }
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>