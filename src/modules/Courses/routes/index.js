export default [
    {
        path: '/admin/courses',
        component: () => import('../Index.vue'),
        name: "courses.index",
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/courses/create',
        component: () => import('../Create.vue'),
        name: "courses.create",
        meta: { requiresAuth: true }
    },
    {
        path: '/admin/courses/trashed',
        component: () => import('../Trashed.vue'),
        name: "courses.trashed",
        meta: { requiresAuth: true }
    },
];
