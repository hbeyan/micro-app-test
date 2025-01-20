import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import microApp from "@micro-zoe/micro-app";

import { defineCustomElements } from 'stencil-library/loader';
defineCustomElements();

microApp.start();
export { microApp };

createApp(App).mount('#app');
