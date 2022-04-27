import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import {requireComponent, registerComponents} from "@/components/_globals";

export const app = createApp(App).use(store).use(router);

registerComponents(requireComponent, app);

app.mount('#app');
