export default [
    {
        path: "/admin/settings/title",
        component: () => import("../Index.vue"),
        name: "settings.title",
        meta: { requiresAuth: true }
    },
    {
        path: "/admin/settings/profile",
        component: () => import("../Create.vue"),
        name: "settings.profile",
        meta: { requiresAuth: true }
    },
    {
        path: "/admin/settings/footer",
        component: () => import("../Trashed.vue"),
        name: "settings.footer",
        meta: { requiresAuth: true }
    },
];
