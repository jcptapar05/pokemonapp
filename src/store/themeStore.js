// Note we're using pinia for store

import { defineStore } from "pinia";

export const useThemeStore = defineStore("themeStore", {
    state: () => {
        return {
            isDark: true,
        };
    },
    
    actions: {
        toggleDarkLightThemes() {
            this.isDark = !this.isDark
        },
    },
});
