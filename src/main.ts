import { createApp } from 'vue';

import App from './App.vue';
// import './service/axios_demo';
import router from './router';
import { registerApp } from './global';
import 'normalize.css';
import './assets/css/index.less';
//全局配置
/* import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css'; */
import 'element-plus/lib/theme-chalk/base.css';
import store, { setupStore } from './store';
const app = createApp(App);
app.use(router).use(store).use(registerApp);
setupStore();
// .use(ElementPlus)
app.mount('#app');
