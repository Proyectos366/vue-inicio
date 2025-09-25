import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { RouteNames } from "../types/routers/routes";
import Home from "../views/Home.vue";
import Contacts from "../views/Contacts.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", name: RouteNames.Home, component: Home },
  { path: "/contacts", name: RouteNames.Contacts, component: Contacts },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
