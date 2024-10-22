import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

// 引入 Pinia
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

// 引入 Vue Router
import router from './router'; // 确保从正确的文件导入

// 实例化 Pinia
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// 创建并挂载应用
createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app');