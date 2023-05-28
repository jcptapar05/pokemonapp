<template>
    <PublicLayout>
        <v-row v-if="pokemonStore.pokemon != null" class="align-center">
            <v-col cols='12' md="6">
                <div class="text-center">
                    <h1 class="text-capitalize">
                        Name: {{ pokemonStore.pokemon.name }}
                    </h1>

                    <p
                        v-for="(ptypes, i) in pokemonStore.pokemon.types"
                        :key="i"
                    >
                        Type:
                        <span>{{ ptypes.type.name }}</span>
                    </p>

                    <div class="d-flex mt-4 justify-center">
                        <div>
                            <p>
                                Height:
                                <span>{{ pokemonStore.pokemon.height }}</span>
                            </p>
                        </div>
                        <div class="ms-6">
                            <p>
                                Weight
                                <span>{{ pokemonStore.pokemon.weight }}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </v-col>
            <v-col cols='12' md="6" class="text-center text-md-start">
                <img
                    :src="pokemonStore.pokemon.sprites.other.home.front_default"
                    class="w-100"
                    alt=""
                    style="max-width: 400px"
                />
            </v-col>
        </v-row>
    </PublicLayout>
</template>

<script setup>
import PublicLayout from "@/layouts/PublicLayout.vue";
import { useHead } from "@vueuse/head";
import { usePokemon } from "@/store/pokemon";
import { useRoute } from "vue-router";
import { onMounted, onUnmounted } from "vue";

const pokemonStore = usePokemon();
const route = useRoute();

onMounted(() => {
    pokemonStore.getPokemon(route.params.id);
});

onUnmounted(() => {
    pokemonStore.PokemonReset();
});

useHead({
    title: "Pokemon Details | SSAVANT",
    meta: [
        {
            name: "Home | Dashboard",
            content: "SSAVANT Admin Dashboard",
        },
    ],
});
</script>

<style></style>
