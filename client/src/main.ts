import { createApp } from 'vue';
import { Quasar } from 'quasar';
import quasarConfig from '../quasar.config';
import App from './App.vue';
import router from './router';
import pinia from './stores';

const app = createApp(App);

app.use(Quasar, quasarConfig);
app.use(pinia);
app.use(router);

app.mount('#app');
