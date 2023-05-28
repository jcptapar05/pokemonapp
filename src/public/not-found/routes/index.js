export default [
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../NotFound.vue'),
        name: "notfound",
    },
];
