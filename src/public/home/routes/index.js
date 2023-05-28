export default [
    {
        path: '/',
        component: () => import('../Index.vue'),
        name: "public.home",
    },
    {
        path: '/pokemon/:id',
        component: () => import('../Details.vue'),
        name: "public.details",
    },
];
