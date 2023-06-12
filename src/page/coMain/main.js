import { createApp } from 'vue';
import App from './App.vue';
import router from '../../router/co-router';
import store from '../../store';
import '../../assets/css/global.styl';
import dayjs from 'dayjs';
import bus from '@/assets/js/bus';

const app = createApp(App);

app.config.globalProperties.$dayjs = dayjs;
app.config.globalProperties.$bus = bus;

app.use(router)
    .use(store).mount('#app');

