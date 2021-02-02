/*
 * @Author: your name
 * @Date: 2021-02-02 15:32:58
 * @LastEditTime: 2021-02-02 15:37:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \webpack5\src\router.js
 */

 import { createRouter, createWebHistory } from 'vue-router';
 import Home from './Home.vue';
 import Me from './Me.vue';

 const routerHistory = createWebHistory();

 const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/me',
            name: 'Me',
            component: Me
        }
    ]
 });

 export default router;
