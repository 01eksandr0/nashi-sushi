import axios from "axios";

export const state = () => ({ products: [] });

export const actions = {
  async getAllProducts({ commit }) {
    try {
      const { data: response } = await axios.get(
        "https://joinposter.com/api/menu.getProducts?token=388658:6876523b828df7f6545d67f8363887d5"
      );
      commit("sortProducts", response.response);
    } catch (error) {
      console.log(error);
    }
  },
};

export const mutations = {
  sortProducts(state, products) {
    state.products.sets = products.filter((i) => i.menu_category_id === "19");
    state.products.premiumRolls = products.filter(
      (i) => i.menu_category_id === "22"
    );
    state.products.philadelphia = products.filter(
      (i) => i.menu_category_id === "10"
    );
    state.products.california = products.filter(
      (i) => i.menu_category_id === "11"
    );
    state.products.futomaki = products.filter(
      (i) => i.menu_category_id === "6"
    );
    state.products.californiaWithSesame = products.filter(
      (i) => i.menu_category_id === "12"
    );
    state.products.hotRolls = products.filter(
      (i) => i.menu_category_id === "7"
    );
    state.products.warmRolls = products.filter(
      (i) => i.menu_category_id === "8"
    );
    state.products.bakedRolls = products.filter(
      (i) => i.menu_category_id === "23"
    );
    state.products.maki = products.filter((i) => i.menu_category_id === "5");
    state.products.sushi = products.filter((i) => i.menu_category_id === "13");
    state.products.soup = products.filter((i) => i.menu_category_id === "17");
    state.products.salad = products.filter((i) => i.menu_category_id === "16");
    state.products.drinks = products.filter((i) => i.menu_category_id === "3");
    state.products.sushiSet = products.filter(
      (i) => i.menu_category_id === "20"
    );
  },
};

export const getters = {
  getProducts(state) {
    return state.products;
  },
};
