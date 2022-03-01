import {createApp} from 'vue';
import App from './App.vue';
import './index.scss';
import Icon from './components/Icon.vue'
import {router} from './router';

const app = createApp(App).component('icon',Icon);
app.use(router);
app.mount('#app');
