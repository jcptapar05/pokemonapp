export default [
    {   
        name: 'Settings',
        icon: 'mdi-cogs',
        children: [
            {
                name: "Title",
                link: "/admin/settings/title",
                icon: 'mdi-subtitles',
            },
            {
                name: "Profile",
                link: "/admin/settings/profile",
                icon: 'mdi-account-circle',
            },
            {
                name: "Footer",
                link: "/admin/settings/footer",
                icon: 'mdi-page-layout-footer',
            },
        ],
    },
];
