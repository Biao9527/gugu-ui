import './index.scss';
import './lib/gugu.scss'
import {createApp} from 'vue';
import App from './App.vue';
import Icon from './components/Icon.vue'
import {router} from './router';
import 'github-markdown-css'

const app = createApp(App).component('icon',Icon);
app.use(router);
app.mount('#app');
