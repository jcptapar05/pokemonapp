<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" width="300" class="px-3">
            <AdminSidebar></AdminSidebar>
        </v-navigation-drawer>

        <v-app-bar elevation="0">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <!-- <v-toolbar-title>Application</v-toolbar-title> -->

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-bell-outline</v-icon>
            </v-btn>

            <v-menu>
                <template v-slot:activator="{ props }">
                    <v-btn icon color="primary" v-bind="props" rounded>
                        <v-icon> mdi-account-circle </v-icon>
                    </v-btn>
                </template>
                <v-list width="200">
                    <v-list-item to="/admin/settings/profile">
                        Julius Dog
                    </v-list-item>
                    <v-list-item to="/"> Logout </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <v-main>
            <v-container class="my-8" fluid>
                <transition name="slide-x" mode="out-in" appear>
                    <slot></slot>
                </transition>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref } from "vue";
import AdminSidebar from "@/components/sidebar/AdminSidebar.vue";
const drawer = ref(true);
</script>
