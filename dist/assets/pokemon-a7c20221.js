import{a as t}from"./axios-4a70c6fc.js";import{d as n}from"./index-bebfab0c.js";const p=n("pokemons",{state:()=>({isLoading:!0,api:"https://pokeapi.co/api/v2/pokemon/",pokemonlists:[],pokemon:null}),actions:{getPokemons(){let o=[];t.get(this.api+"?limit=48").then(e=>{o=e.data.results,o.forEach(s=>{t.get(s.url).then(i=>{this.pokemonlists.push(i.data)})})}).catch(e=>{console.log(e)}).finally(()=>{this.isLoading=!1})},PokemonsReset(){this.pokemonlists=[]},getPokemon(o){t.get(this.api+o).then(e=>{this.pokemon=e.data})},PokemonReset(){this.pokemon=null},loadMorePokemons(o){}}});export{p as u};
