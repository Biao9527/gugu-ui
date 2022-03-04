import {createApp, h} from 'vue';
import Dialog from './Dialog.vue';

export const openDialog = (options) => {
  const {title, content,ok,cancel,closeOnclickOverlay} = options;
  const div = document.createElement('div');
  document.body.appendChild(div);
  const close = ()=>{
    // @ts-ignore
    app.unmount(div)
    div.remove()
  }
  const app = createApp({
    'render'() {
      return h(
        Dialog, {
          visible: true,
          'onUpdate:visible': (visible) => {
            if (visible === false) {
                close()
            }
          },
          closeOnclickOverlay,
          ok,
          cancel
        }, {
          title, content
        }
      );
    }
  });
  app.mount(div);
};