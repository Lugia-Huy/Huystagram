import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Profile from "./components/pages/Profile.vue";

const routes = [
  {
    path: "/",
    alias: "/",
    name: "Home",
    component: () => import("./components/pages/Main"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = new VueRouter({
  mode: "history",
  routes: routes,
});

export default router;
