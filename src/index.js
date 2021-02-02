/*
 * @Author: your name
 * @Date: 2021-02-01 19:49:06
 * @LastEditTime: 2021-02-02 15:37:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\src\index.js
 */

import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';


createApp(App).use(router).mount('#app');
