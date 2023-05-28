// Note we're using pinia for store

import axios from "axios";
import { defineStore } from "pinia";

export const usePokemon = defineStore("pokemons", {
    state: () => {
        return {
            isLoading: true,
            api: "https://pokeapi.co/api/v2/pokemon/",
            pokemonlists: [],
            pokemon: null
        };
    },

    actions: {
        getPokemons() {
            let lists = [];

            axios.get(this.api + '?limit=48').then((res) => {
                lists = res.data.results;

                lists.forEach((results) => {
                    axios.get(results.url).then((results) => {
                        this.pokemonlists.push(results.data);
                    });
                });
            }).catch(err => {
                console.log(err);
            }).finally(() => {
                this.isLoading = false
            });
        },

        PokemonsReset() {
            this.pokemonlists = [];
        },

        getPokemon(id) {
            axios.get(this.api + id).then(res => {
                this.pokemon = res.data;
            })
        },

        PokemonReset() {
            this.pokemon = null;
        },

        loadMorePokemons(id) {},
    },
});
