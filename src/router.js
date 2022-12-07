import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import Profile from "./components/pages/profile/Profile.vue";
import Direct from "./components/pages/direct/Direct.vue";
import Explore from "./components/pages/explore/Explore.vue";

const routes = [
  {
    path: "/",
    alias: "/",
    name: "Home",
    component: () => import("./components/pages/home/Main"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/direct/inbox/",
    name: "Direct",
    component: Direct,
  },
  {
    path: "/explore/",
    name: "Explore",
    component: Explore,
  },
  {
    path: "/profile/",
    name: "Profile",
    component: Profile,
    children: [
      {
        path: "",
        name: "ProfilePost",
        component: () =>
          import("./components/pages/profile/tabs-view/Posts"),
      },
      {
        path: "reels/",
        name: "ProfileReels",
        component: () =>
          import("./components/pages/profile/tabs-view/Reels"),
      },
      {
        path: "igtv/",
        name: "ProfileIGTV",
        component: () =>
          import("./components/pages/profile/tabs-view/IGTV"),
      },
      {
        path: "saved/",
        name: "ProfileSave",
        component: () =>
          import("./components/pages/profile/tabs-view/Save"),
      },
      {
        path: "tagged/",
        name: "ProfileTag",
        component: () =>
          import("./components/pages/profile/tabs-view/Tag"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});

export default router;
