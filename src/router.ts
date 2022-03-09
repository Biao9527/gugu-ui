import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import SwitchDemo from './components/SwitchDemo.vue';
import ButtonDemo from './components/ButtonDemo.vue';
import DialogDemo from './components/DialogDemo.vue';
import TabsDemo from './components/TabsDemo.vue';
import Markdown from './components/Markdown.vue';
import {h} from 'vue';

const md = filename=>h(Markdown,{path:`../markdown/${filename}.md`,key:filename})


const routes = [
  {path: '/', component: Home},
  {path: '/doc', component: Doc,children:[
      {path: '/doc/' ,component:md('introduce')},
      {path: '/doc/introduce' ,component:md('introduce')},
      {path: '/doc/install' ,component:md('install')},
      {path: '/doc/quickUse' ,component:md('quickUse')},
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