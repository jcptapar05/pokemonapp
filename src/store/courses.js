// Note we're using pinia for store

import { defineStore } from "pinia";

export const useCourse = defineStore("coursesStore", {
    state: () => {
        return {
            courses: ['Math', 'Science', 'PE']
        };
    },
});
