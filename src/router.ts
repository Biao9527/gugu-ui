import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Switch from './components/Switch.vue';
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  {path: '/', component: Home},
  {path: '/doc', component: Doc,children:[
      {path: '/doc/' ,component:Switch},
      {path: '/doc/switch' ,component:Switch}
    ]}
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export {router}