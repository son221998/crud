// import './bootstrap';
// import * as vue from 'vue'

// window.Vue = vue;
// import App from './components/App.vue';
// import * as VueRouter from 'vue-router';
// import VueAxios from 'vue-axios';
// import axios from 'axios';
// import {routes} from './routes';
 
// Vue.use(VueRouter);
// Vue.use(VueAxios, axios);
// createApp(App).mount("#app")
 
// const router = new VueRouter({
//     mode: 'history',
//     routes: routes
// });
 
// const app = new Vue({
//     el: '#app',
//     router: router,
//     render: h => h(App),
// });


import { createApp } from 'vue'; // Import createApp function from the Vue package

import App from './components/App.vue';
import { createRouter, createWebHistory } from 'vue-router'; // Import createRouter and createWebHistory functions from vue-router

import VueAxios from 'vue-axios';
import axios from 'axios';
import { routes } from './routes';

const app = createApp(App); // Create the Vue app instance using createApp function

app.use(VueAxios, axios);

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

app.use(router);

app.mount('#app');