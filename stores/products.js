import { defineStore } from "pinia";
import axios from "axios";

export const useProducts = defineStore("products", {
  state: () => ({
    products: {},
  }),
  getters: {
    getProducts: (s) => s.products,
  },
  actions: {
    async fetchProducts() {
      try {
        const response = await axios.get(
          "https://joinposter.com/api/menu.getProducts?token=388658:6876523b828df7f6545d67f8363887d5"
        );
        const products = response.data.response; // Предположим, что ответ содержит массив продуктов

        this.products = {
          sets: products.filter((i) => i.menu_category_id === "19"),
          premiumRolls: products.filter((i) => i.menu_category_id === "22"),
          philadelphia: products.filter((i) => i.menu_category_id === "10"),
          california: products.filter((i) => i.menu_category_id === "11"),
          futomaki: products.filter((i) => i.menu_category_id === "6"),
          californiaWithSesame: products.filter(
            (i) => i.menu_category_id === "12"
          ),
          hotRolls: products.filter((i) => i.menu_category_id === "7"),
          warmRolls: products.filter((i) => i.menu_category_id === "8"),
          bakedRolls: products.filter((i) => i.menu_category_id === "23"),
          maki: products.filter((i) => i.menu_category_id === "5"),
          sushi: products.filter((i) => i.menu_category_id === "13"),
          soup: products.filter((i) => i.menu_category_id === "17"),
          salad: products.filter((i) => i.menu_category_id === "16"),
          drinks: products.filter((i) => i.menu_category_id === "3"),
          sushiSet: products.filter((i) => i.menu_category_id === "20"),
        };
        console.log(1);
      } catch (error) {
        console.log(error);
      }
    },
  },
});
