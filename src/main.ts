import './index.scss';
import './lib/gugu.scss'
import {createApp} from 'vue';
import App from './App.vue';
import {router} from './router';
import 'github-markdown-css'
import './icons/svg.js'

const app = createApp(App)
app.use(router);
app.mount('#app');
