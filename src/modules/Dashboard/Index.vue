<template>
    <AdminLayout>
        <div>
            <v-row class="align-stretch justify-stretch">
                <v-col col="12" md="4">
                    <Shortcut></Shortcut>
                </v-col>
                <v-col col="12" md="4">
                    <Learners class="h-100"></Learners>
                </v-col>
                <v-col col="12" md="4">
                    <Courses class="h-100"></Courses>
                </v-col>
            </v-row>
            <v-row class="my-4">
                <v-col cols="12" md="8">
                    <EnrolledLearners></EnrolledLearners>
                </v-col>
                <v-col cols="12" md="4">
                    <PopularCourses></PopularCourses>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <DashboardCourses></DashboardCourses>
                </v-col>
            </v-row>
        </div>
    </AdminLayout>
</template>

<script setup>
import AdminLayout from "@/layouts/AdminLayout.vue";
import { useHead } from "@vueuse/head";
import EnrolledLearners from "./partials/Admin/EnrolledLearners.vue";
import PopularCourses from "./partials/Admin/PopularCourses.vue";
import DashboardCourses from "./partials/Admin/DashboardCourses.vue";
import Shortcut from "./partials/Admin/toolbars/Shortcut.vue";
import Learners from "./partials/Admin/toolbars/Learners.vue";
import Courses from "./partials/Admin/toolbars/Courses.vue";

useHead({
    title: "Admin | Dashboard",
    meta: [
        {
            name: "Admin | Dashboard",
            content: "SSAVANT Admin Dashboard",
        },
    ],
});
</script>

<style></style>
