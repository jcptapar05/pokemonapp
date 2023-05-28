// Note we're using pinia for store

import { defineStore } from "pinia";

export const useAuthenticated = defineStore("authStore", {
    state: () => {
        return {
            isAuthenticated: true,
        };
    },
    actions: {
        login() {
            this.isAuthenticated = true
        },

        logout() {
            this.isAuthenticated = false
        }

    },
});
