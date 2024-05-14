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
      const { data } = await axios.get(
        "https://joinposter.com/api/menu.getProducts?token=388658:6876523b828df7f6545d67f8363887d5"
      );
      const list = data.response;
      this.products.sets = list.filter((i) => i.menu_category_id === "19");
      this.products.premiumRolls = list.filter(
        (i) => i.menu_category_id === "22"
      );
      this.products.philadelphia = list.filter(
        (i) => i.menu_category_id === "10"
      );
      this.products.california = list.filter(
        (i) => i.menu_category_id === "11"
      );
      this.products.futomaki = list.filter((i) => i.menu_category_id === "6");
      this.products.californiaWithSesame = list.filter(
        (i) => i.menu_category_id === "12"
      );
      this.products.hotRolls = list.filter((i) => i.menu_category_id === "7");
      this.products.warmRolls = list.filter((i) => i.menu_category_id === "8");
      this.products.bakedRolls = list.filter(
        (i) => i.menu_category_id === "23"
      );
      this.products.maki = list.filter((i) => i.menu_category_id === "5");
      this.products.sushi = list.filter((i) => i.menu_category_id === "13");
      this.products.soup = list.filter((i) => i.menu_category_id === "17");
      this.products.salad = list.filter((i) => i.menu_category_id === "16");
      this.products.drinks = list.filter((i) => i.menu_category_id === "3");
    },
  },
});
