<template>
    <PublicLayout>
        <v-row>
            <v-col
                cols="12"
                sm="6"
                md="4"
                lg="3"
                v-for="product in productStore.products"
                :key="product.id"
                class="mb-4"
            >
                <v-card rounded="xl" class="h-100">
                    <v-img cover height="260" :src="product.image"></v-img>

                    <v-card-item>
                        <v-card-title>{{ product.title }}</v-card-title>
                    </v-card-item>

                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating
                                :model-value="product.rating.rate"
                                color="amber"
                                density="compact"
                                half-increments
                                readonly
                                size="small"
                            ></v-rating>

                            <div class="text-grey ms-4">
                                {{ product.rating.rate }} ({{
                                    product.rating.count
                                }})
                            </div>
                            <div class="my-3">
                                <p class="turncate-2">
                                    {{ product.description }}
                                </p>
                            </div>
                        </v-row>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-btn color="primary" rounded="xl">
                            View Details
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </PublicLayout>
</template>

<script setup>
import PublicLayout from "@/layouts/PublicLayout.vue";
import { useHead } from "@vueuse/head";
import { useProductStore } from "@/store/products";
import { onMounted } from "vue";

const productStore = useProductStore();

onMounted(() => {
    productStore.getProducts();
});

useHead({
    title: "Blogs | SSAVANT",
    meta: [
        {
            name: "Home | Dashboard",
            content: "SSAVANT Admin Dashboard",
        },
    ],
});
</script>

<style></style>
