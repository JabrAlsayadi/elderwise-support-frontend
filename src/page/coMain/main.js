import { createApp } from 'vue';
import App from './App.vue';
import router from '../../router/co-router';
import store from '../../store';
import '../../assets/css/global.styl';
import dayjs from 'dayjs';

const app = createApp(App);

app.config.globalProperties.$dayjs = dayjs

app.use(router)
    .use(store).mount('#app');

