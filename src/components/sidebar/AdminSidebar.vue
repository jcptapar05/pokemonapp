<template>
    <v-list v-model:opened="open">
        <v-btn variant="plain" to="/admin/dashboard" elevation="0" class="my-5">Logo dito</v-btn>

        <v-list-item
            prepend-icon="mdi-view-dashboard"
            to="/admin/dashboard"
            class="mb-1"
            rounded="xl"
            title="Dashboard"
        ></v-list-item>

        <template v-for="link in links" :key="link.name">
            <v-list-group v-if="link.children" :value="link.name" class="mb-1">
                <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        :prepend-icon="link.icon"
                        :title="link.name"
                        rounded="xl"
                        class="mb-1"
                    ></v-list-item>
                </template>
                <v-list-item
                    v-for="l in link.children"
                    :key="l.link"
                    :title="l.name"
                    :prepend-icon="l.icon"
                    :value="l.link"
                    rounded="xl"
                    :to="l.link"
                    class="mb-1"
                ></v-list-item>
            </v-list-group>

            <v-list-item
                v-else
                rounded="xl"
                :prepend-icon="link.icon"
                :title="link.name"
                :to="link.link"
                class="mb-1"
            ></v-list-item>
        </template>
    </v-list>

    <v-row
        class="w-100 text-end"
        style="border-top: 1px solid #ccc; position: absolute; bottom: 10px"
    >
        <v-col>
            <v-btn icon id="mode-switcher" @click="toggleTheme()">
                <v-icon color="warning">
                    {{
                        darkMode.isDark
                            ? "mdi-weather-night"
                            : "mdi-weather-sunny"
                    }}
                </v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref } from "vue";
import routes from "./routes";
import { useTheme } from "vuetify";
import { useThemeStore } from "@/store/themeStore";

// auto import
// routes sidebar link items
const open = ref(["Users"]);
let links = ref([]);

Object.entries(routes).map(([path, module]) => {
    links.value.push(...module.default);
});

// Toggle Themes
const theme = useTheme();
const darkMode = useThemeStore();

const toggleTheme = () => {
    theme.global.name.value = darkMode.isDark ? "dark" : "light";
    darkMode.toggleDarkLightThemes();
};
</script>
