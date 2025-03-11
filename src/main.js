import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import 'ant-design-vue/dist/reset.css';
import Antd from 'ant-design-vue';

// createApp(App).mount('#app')
const app = createApp(App);
app.use(router);
app.use(Antd);
app.mount('#app');
