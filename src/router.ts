import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import Introduce from './components/document/Introduce.vue'
import Install from './components/document/Install.vue'
import QuickUse from './components/document/QuickUse.vue'



const routes = [
  {path: '/', component: Home},
  {path: '/doc', component: Doc,children:[
      {path: '/doc/' ,component:Introduce},
      {path: '/doc/introduce' ,component:Introduce},
      {path: '/doc/install' ,component:Install},
      {path: '/doc/quickUse' ,component:QuickUse},
      {path: '/doc/switch' ,component:SwitchDemo},
      {path: '/doc/button' ,component:ButtonDemo},
      {path: '/doc/dialog' ,component:DialogDemo},
      {path: '/doc/tabs' ,component:TabsDemo}
    ]}
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export {router}