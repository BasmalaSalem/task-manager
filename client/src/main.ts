import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue';
import router from './router';
import pinia from './stores';

const app = createApp(App);

app.use(Quasar);
app.use(pinia);
app.use(router);

app.mount('#app');
