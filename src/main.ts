import {createApp} from 'vue';
import App from './App.vue';
import './index.scss';
import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import Icon from './components/Icon.vue'

const routes = [
  {path: '/', component: Home},
  {path: '/doc', component: Doc}
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
const app = createApp(App).component('icon',Icon);
app.use(router);
app.mount('#app');
