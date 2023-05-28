<template>
    <PublicLayout>
        <div>Public Contact</div>
    </PublicLayout>
</template>

<script setup>
import PublicLayout from "@/layouts/PublicLayout.vue";
import { useHead } from "@vueuse/head";

useHead({
    title: "Contact | SSAVANT",
    meta: [
        {
            name: "Home | Dashboard",
            content: "SSAVANT Admin Dashboard",
        },
    ],
});
</script>

<style></style>
