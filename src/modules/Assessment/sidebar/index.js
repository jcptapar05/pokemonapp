export default [
    {   
        name: 'Assessments',
        icon: 'mdi-clipboard-list',
        children: [
            {
                name: "Index",
                link: "/admin/assessments",
                icon: 'mdi-format-list-checks',
            },
            {
                name: "Create",
                link: "/admin/assessments/create",
                icon: 'mdi-playlist-plus',
            },
            {
                name: "Trashed",
                link: "/admin/assessments/trashed",
                icon: 'mdi-playlist-minus',
            },
        ],
    },
];
