import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Post from '@/components/post/Post.vue'

const routes = [
    {
        path: "/",
        alias: "/",
        name: "home",
        component: () => import("./components/Main"),
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/post",
        name: "post",
        component: Post,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router;