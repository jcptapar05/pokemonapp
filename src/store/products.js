// Note we're using pinia for store

import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("productStore", {
    state: () => {
        return {
            products: [],
            api: 'https://fakestoreapi.com/products/',
            product: null
        };
    },
    
    actions: {
        getProducts() {
            axios.get(this.api).then(response => {
                this.products = response.data
                console.log(response.data);
                console.log(this.products);
            })
        }
    },
});
