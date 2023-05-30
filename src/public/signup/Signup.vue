<template>
    <PublicLayout>
        <v-form
            @submit.prevent="login()"
            style="max-width: 400px"
            class="mx-auto"
        >
            <v-row>
                <v-col cols="12" md="12">
                    <v-text-field label="Username"></v-text-field>
                </v-col>

                <v-col cols="12" md="12">
                    <v-text-field label="Password"></v-text-field>
                </v-col>

                <v-col cols="12" md="12" class="text-end">
                    <v-btn color="primary" rounded="xl" type="submit"
                        >Submit</v-btn
                    >
                </v-col>
            </v-row>
        </v-form>
    </PublicLayout>
</template>

<script setup>
import PublicLayout from "@/layouts/PublicLayout.vue";
import { useHead } from "@vueuse/head";
import { useAuthenticated } from "@/store/auth";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const route = useRoute();
const useAuthStore = useAuthenticated();

const credentials = ref({
    username: null,
    password: null,
});

const login = () => {
    useAuthStore.login();

    if (route.redirectedFrom) {
        router.push(route.redirectedFrom.fullPath);
    } else {
        router.push({ name: "admin.dashboard" });
    }
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
