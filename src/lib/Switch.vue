<template>
  <div>
    <button class="switch"
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
      const {value, size,disabled} = props;
      return {
        checked: value,
        [`switch-${size}`]: size,
        ['switch-disabled']:disabled
      };
    });
    return {toggle, className};
  }
};
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
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
  &.checked {
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
  &.checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
&.switch-small {
  width: $h * 1.2;
  height: $h * 0.8;

  > span {
    width: $h2 * 0.75;
    height: $h2 * 0.75;
  }

  &.checked > span {
    left: calc(100% - #{$h2 * 0.75} - 2px);
  }

  &:active {
    > span {
      width: $h2;
    }
  }
}
&.switch-big {
  height: $h * 1.4;
  width: $h * 2.8;
  border-radius: $h/1.4;
  > span {
    width: $h2 * 1.5;
    height: $h2 * 1.5;
    border-radius: 50%;
  }
  &.checked > span {
    left: calc(100% - #{$h2 * 1.5} - 2px);
  }
  &:active {
    > span {
      width: $h2;
    }
  }
}
  &.switch-disabled{
    background: #bfbfbf;
    &:hover{
      cursor:no-drop;
    }
  }
}

</style>