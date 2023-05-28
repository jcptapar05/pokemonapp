<template>
    <PublicLayout>
        <v-row align="stretch">
            <v-col
                cols="12"
                sm="6"
                md="4"
                lg="3"
                v-for="list in pokemonStore.pokemonlists"
                :key="list.name"
            >
                <router-link
                    :to="'/pokemon/' + list.id"
                    style="text-decoration: none"
                >
                    <v-card
                        class="pa-4"
                        rounded="xl"
                        color="white"
                        theme="dark"
                        style="height: 100%"
                    >
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title class="text-h5 text-capitalize">
                                    {{ list.name }}
                                </v-card-title>

                                <v-card-subtitle
                                    v-for="(ptypes, i) in list.types"
                                    :key="i"
                                >
                                    <v-icon
                                        icon="mdi-atom"
                                        class="me-3"
                                    ></v-icon>
                                    <span>{{ ptypes.type.name }}</span>
                                </v-card-subtitle>

                                <div
                                    class="mt-5 d-flex flex-no-wrap justify-space-between"
                                >
                                    <div class="mx-4">
                                        <v-icon
                                            icon="mdi-ruler"
                                            class="me-3"
                                        ></v-icon>
                                        <span>{{ list.height }}</span>
                                    </div>
                                    <div class="ms-4">
                                        <v-icon
                                            class="me-3"
                                            icon="mdi-scale-balance"
                                        ></v-icon>
                                        <span>{{ list.weight }}</span>
                                    </div>
                                </div>
                            </div>

                            <v-avatar class="ma-3 px-2" size="125" rounded="0">
                                <v-img
                                    class="w-100"
                                    :src="list.sprites.other.home.front_default"
                                ></v-img>
                            </v-avatar>
                        </div>
                    </v-card>
                </router-link>
            </v-col>
        </v-row>
    </PublicLayout>
</template>

<script setup>
import PublicLayout from "@/layouts/PublicLayout.vue";
import { useHead } from "@vueuse/head";
import { onMounted, onUnmounted } from "vue";
import { usePokemon } from "@/store/pokemon";

const pokemonStore = usePokemon();

onMounted(() => {
    pokemonStore.getPokemons();
});

onUnmounted(() => {
    pokemonStore.PokemonsReset();
});

useHead({
    title: "Home | SSAVANT",
    meta: [
        {
            name: "Home | Dashboard",
            content: "SSAVANT Admin Dashboard",
        },
    ],
});
</script>

<style></style>
