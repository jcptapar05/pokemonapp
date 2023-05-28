export default [
    {   
        name: 'Discussions',
        icon: 'mdi-book-open-variant',
        children: [
            {
                name: "Index",
                link: "/admin/discussions",
                icon: 'mdi-book-multiple',
            },
            {
                name: "Create",
                link: "/admin/discussions/create",
                icon: 'mdi-book-plus'
            },
            {
                name: "Delete",
                link: "/admin/discussions/trashed",
                icon: 'mdi-book-minus'
            },
        ],
    },
];
