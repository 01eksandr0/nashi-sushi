import { defineStore } from "pinia";

export const useShow = defineStore("show", {
  state: () => ({ thank: false }),
  getters: {
    thankModal: (s) => s.thank,
  },
  actions: {
    changeThankModal(status) {
      this.thank = status;
    },
  },
});
