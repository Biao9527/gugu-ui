<template>
  <div>
    <button class="gugu-switch"
            :class="className"
            @click="toggle"
            :disabled="disabled">
      <span></span>
    </button>
  </div>
</template>
<script lang="ts">

import {computed} from 'vue';

export default {
  props: {
    value: Boolean,
    size: String,
    disabled: Boolean
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    const className = computed(() => {
      const {value, size, disabled} = props;
      return {
        ['gugu-checked']: value,
        [`gugu-switch-${size}`]: size,
        ['gugu-switch-disabled']: disabled
      };
    });
    return {toggle, className};
  }
};
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.gugu-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
  &.gugu-checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.gugu-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
  &.gugu-switch-small {
    width: $h * 1.2;
    height: $h * 0.8;
    > span {
      width: $h2 * 0.75;
      height: $h2 * 0.75;
    }
    &.gugu-checked > span {
      left: calc(100% - #{$h2 * 0.75} - 2px);
    }
    &:active {
      > span {
        width: $h2;
      }
    }
  }
  &.gugu-switch-big {
    height: $h * 1.4;
    width: $h * 2.8;
    border-radius: $h/1.4;
    > span {
      width: $h2 * 1.45;
      height: $h2 * 1.45;
      border-radius: 50%;
    }
    &.gugu-checked > span {
      left: calc(100% - #{$h2 * 1.5} - 2px);
    }
    &:active {
      > span {
        width: $h2;
      }
    }
  }
  &.gugu-switch-disabled {
    background: #bfbfbf;
    &:hover {
      cursor: no-drop;
    }
  }
}
</style>