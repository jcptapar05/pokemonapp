<template>
    <v-app>
        <v-app-bar class="py-3" density="compact" elevation="1">
            <router-link to="/" class="ms-10">
                <v-avatar color="grey-darken-1" size="32"></v-avatar>
            </router-link>

            <v-spacer></v-spacer>

            <v-tabs centered class="d-none d-md-block">
                <v-tab v-for="link in links" :key="link" :to="link.link">
                    {{ link.name }}
                </v-tab>
            </v-tabs>

            <v-spacer></v-spacer>

            <!-- left menu -->
            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn icon color="primary" v-bind="props" rounded>
                        <v-icon
                            :color="darkMode.isDark ? 'primary' : 'warning'"
                        >
                            mdi-account-circle
                        </v-icon>
                    </v-btn>
                </template>
                <v-list width="200">
                    <v-list-item to="/login"> Login </v-list-item>
                    <v-list-item to="/signup"> Signup </v-list-item>
                    <v-divider></v-divider>
                    <v-list-item class="text-start">
                        <v-btn
                            icon
                            id="mode-switcher"
                            @click="toggleTheme()"
                            elevation="0"
                        >
                            <v-icon color="primary">
                                {{
                                    darkMode.isDark
                                        ? "mdi-weather-night"
                                        : "mdi-weather-sunny"
                                }}
                            </v-icon>
                        </v-btn>
                    </v-list-item>
                </v-list>
            </v-menu>
            <!-- left menu -->
        </v-app-bar>

        <v-main class="mt-16 pb-16">
            <v-container>
                <transition name="slide-x" mode="out-in" appear>
                    <slot></slot>
                </transition>
            </v-container>
        </v-main>

        <v-bottom-navigation grow class="d-flex d-md-none">
            <v-btn
                v-for="link in links"
                :key="link"
                :to="link.link"
                :value="link.name"
            >
                <v-icon>{{ link.icon }}</v-icon>
                {{ link.name }}
            </v-btn>
        </v-bottom-navigation>
    </v-app>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";
import { useThemeStore } from "@/store/themeStore";

const links = ref([
    { name: "Home", link: "/", icon: "mdi-home" },
    { name: "About", link: "/about", icon: "mdi-comment-question" },
    { name: "Blogs", link: "/blogs", icon: "mdi-post" },
    { name: "Contact", link: "/contact", icon: "mdi-phone" },
]);

// Toggle Themes
const theme = useTheme();
const darkMode = useThemeStore();

const toggleTheme = () => {
    theme.global.name.value = darkMode.isDark ? "dark" : "light";
    darkMode.toggleDarkLightThemes();
};
</script>
