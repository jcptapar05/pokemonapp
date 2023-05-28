export default [
    {
        path: '/admin/discussions',
        component: () => import('../Index.vue'),
        name: "discussions.index",
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/discussions/create',
        component: () => import('../Create.vue'),
        name: "discussions.create",
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/discussions/trashed',
        component: () => import('../Trashed.vue'),
        name: "discussions.trashed",
        meta: { requiresAuth: true }
    },
];
