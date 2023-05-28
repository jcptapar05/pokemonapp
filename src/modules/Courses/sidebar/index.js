export default [
    {   
        name: 'Courses',
        icon: 'mdi-book-open-variant',
        children: [
            {
                name: "Index",
                link: "/admin/courses",
                icon: 'mdi-book-multiple',
            },
            {
                name: "Create",
                link: "/admin/courses/create",
                icon: 'mdi-book-plus'
            },
            {
                name: "Delete",
                link: "/admin/courses/trashed",
                icon: 'mdi-book-minus'
            },
        ],
    },
];
