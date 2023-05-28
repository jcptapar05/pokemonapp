export default [
    {
        path: "/admin/assessments",
        component: () => import("../Index.vue"),
        name: "assessments.logo",
        meta: { requiresAuth: true }
    },
    {
        path: "/admin/assessments/create",
        component: () => import("../Create.vue"),
        name: "assessments.create",
        meta: { requiresAuth: true }
    },
    {
        path: "/admin/assessments/trashed",
        component: () => import("../Trashed.vue"),
        name: "assessments.trashed",
        meta: { requiresAuth: true }
    },
];
