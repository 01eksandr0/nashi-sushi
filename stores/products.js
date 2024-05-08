import { defineStore } from "pinia";

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
        const data = await axios.get(
          "https://joinposter.com/api/menu.getProducts?token=388658:6876523b828df7f6545d67f8363887d5"
        );

        this.products.sets = products.filter(
          (i) => i.menu_category_id === "19"
        );
        this.products.premiumRolls = products.filter(
          (i) => i.menu_category_id === "22"
        );
        this.products.philadelphia = products.filter(
          (i) => i.menu_category_id === "10"
        );
        this.products.california = products.filter(
          (i) => i.menu_category_id === "11"
        );
        this.products.futomaki = products.filter(
          (i) => i.menu_category_id === "6"
        );
        this.products.californiaWithSesame = products.filter(
          (i) => i.menu_category_id === "12"
        );
        this.products.hotRolls = products.filter(
          (i) => i.menu_category_id === "7"
        );
        this.products.warmRolls = products.filter(
          (i) => i.menu_category_id === "8"
        );
        this.products.bakedRolls = products.filter(
          (i) => i.menu_category_id === "23"
        );
        this.products.maki = products.filter((i) => i.menu_category_id === "5");
        this.products.sushi = products.filter(
          (i) => i.menu_category_id === "13"
        );
        this.products.soup = products.filter(
          (i) => i.menu_category_id === "17"
        );
        this.products.salad = products.filter(
          (i) => i.menu_category_id === "16"
        );
        this.products.drinks = products.filter(
          (i) => i.menu_category_id === "3"
        );
        this.products.sushiSet = products.filter(
          (i) => i.menu_category_id === "20"
        );
      } catch (error) {
        console.log(error);
      }
    },
  },
});
