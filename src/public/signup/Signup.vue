<template>
    <PublicLayout>
        <div>
            Public Login

            <v-btn color="primary" @click="login()"> Signup </v-btn>
        </div>
    </PublicLayout>
</template>

<script setup>
import PublicLayout from "@/layouts/PublicLayout.vue";
import { useHead } from "@vueuse/head";
import { useAuthenticated } from "@/store/auth";
import { useRouter } from "vue-router";

const router = useRouter();
const useAuthStore = useAuthenticated();

const login = () => {
    useAuthStore.login();

    if(route.query) {
        return router.push(route.redirectedFrom.fullPath)
    }

    router.push({ name: "admin.dashboard" });
};
useHead({
    title: "Signup | SSAVANT",
    meta: [
        {
            name: "Home | Dashboard",
            content: "SSAVANT Admin Dashboard",
        },
    ],
});
</script>
