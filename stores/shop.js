import { defineStore } from "pinia";

export const useShop = defineStore("shop", {
  state: () => ({ shop: [] }),
  getters: {
    shopList: (s) => s.shop,
    getQuantity: (s) => s.shop.reduce((sum, i) => sum + i.quantity, 0),
    getSum: (s) =>
      s.shop.reduce((sum, i) => sum + i.price[1].slice(0, -2) * i.quantity, 0),
  },
  actions: {
    addProduct(product) {
      const index = this.shop.findIndex(
        (i) => i.product_id === product.product_id
      );
      if (index === -1) this.shop.push({ ...product, quantity: 1 });
      else this.shop[index].quantity += 1;
    },
    minusProduct(id) {
      const index = this.shop.findIndex((i) => i.product_id === id);
      this.shop[index].quantity--;
    },
    deleteShop(i = true) {
      if (i) this.shop = [];
    },
  },
});
