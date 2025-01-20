import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { defineCustomElements } from 'stencil-library/loader';

defineCustomElements();

createApp(App).mount('#app');
