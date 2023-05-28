<template>
    <PublicLayout>

      <div>About</div>

    </PublicLayout>
</template>

<script setup>
import PublicLayout from "@/layouts/PublicLayout.vue";
import { useHead } from "@vueuse/head";

useHead({
    title: "About | SSAVANT",
    meta: [
        {
            name: "Home | Dashboard",
            content: "SSAVANT Admin Dashboard",
        },
    ],
});
</script>

<style></style>
