import { createApp } from 'vue';
import App from './App.vue';
import router from '../../router/admin-router';
import store from '../../store';
import '../../assets/css/global.styl';

const app = createApp(App);
app.use(router)
    .use(store).mount('#app');
