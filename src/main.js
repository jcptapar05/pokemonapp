import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import vuetify from './plugins/vuetify';
import router from './router/router';

import { createPinia } from 'pinia'
const pinia = createPinia()
import { createHead } from "@vueuse/head";

import VueApexCharts from "vue3-apexcharts";
import './registerServiceWorker'
const head = createHead();

createApp(App).use(head).use(VueApexCharts).use(pinia).use(router).use(vuetify).mount('#app')
