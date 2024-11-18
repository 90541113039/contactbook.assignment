import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutUsView from "../views/AboutView.vue";
import ContactBookView from "../views/ContactBookView.vue";
import HelpView from "../views/HelpView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutUsView },
  { path: "/contacts", component: ContactBookView },
  { path: "/help", component: HelpView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
