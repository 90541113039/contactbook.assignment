import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ContactView from './views/ContactView.vue';
import AboutView from './views/AboutView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/contacts', name: 'Contacts', component: ContactView },
  { path: '/about', name: 'About', component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');
