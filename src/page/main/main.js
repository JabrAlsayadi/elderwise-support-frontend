import { createApp } from 'vue';
import App from './App.vue';
import router from '../../router/index';
import store from '../../store';
import '../../assets/css/global.styl';

window.HOSTAPI = 'main'

const app = createApp(App);
app.use(router)
    .use(store).mount('#app');
