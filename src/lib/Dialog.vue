<template>
  <template v-if="visible">
    <Teleport to="body">
      <div class="gugu-dialog-overlay" @click="onclickOverlay"></div>
      <div class="gugu-dialog-wrapper">
        <div class="gugu-dialog">
          <header>
            <slot name="title"/>
            <span @click="close" class="gugu-dialog-close"></span></header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <Button level="main" @click="ok">OK</Button>
            <Button @click="cancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>
<script lang="ts">
import Button from './Button.vue';

export default {
  components: {Button},
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    closeOnclickOverlay: {
      type: Boolean,
      default: true
    },
    ok: {
      type: Function
    },
    cancel: {
      type: Function
    }
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false);
    };
    const onclickOverlay = () => {
      if (props.closeOnclickOverlay) {
        close();
      }
    };
    const ok = () => {
      if (props.ok && props.ok() !== false) {
        close();
      }
    };
    const cancel = () => {
      if (props.cancel && props.cancel() !== false) {
        close();
      }
    };
    return {close, onclickOverlay, ok, cancel};
  }
};
</script>
<style lang="scss">
$radius: 4px;
$border-color: #eaecef;
.gugu-dialog {
  background: #ffffff;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 450px;
  max-width: 90%;
  @media (max-width: 500px) {
    min-width: 320px;
    max-width: 90%;
  }
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
  }
  > main {
    padding: 24px 16px;
    font-size: 14px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>