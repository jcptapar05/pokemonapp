import { useAuthenticated } from "@/store/auth";
import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "@/modules/dashboard/index.vue";

const moduleroutes = import.meta.globEager("@/modules/*/routes/*.js");
const publicroutes = import.meta.globEager("@/public/*/routes/*.js");

const routes = [
    {
        path: "/admin/dashboard",
        component: Dashboard,
        name: "admin.dashboard",
        meta: { requiresAuth: true },
    },
];

// Admin
Object.entries(moduleroutes).map(([path, module]) => {
    routes.push(...module.default);
});

// Public
Object.entries(publicroutes).map(([path, module]) => {
    routes.push(...module.default);
});

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    const authStore = useAuthenticated();

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        return {
            path: "/login",
            query: { redirect: to.fullPath },
        };
    }
});

export default router;
