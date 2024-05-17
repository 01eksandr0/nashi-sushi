<template>
  <div>
    <ThankYouModal v-if="thankModal" />
    <MyHeader />
    <NuxtPage />
    <MyFooter />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useProducts } from "../stores/products.js";
import MyHeader from "../modules/Header/MyHeader.vue";
import MyFooter from "../modules/Footer/Footer.vue";
import ThankYouModal from "../modules/ThankYouModal/ThankYouModal.vue";
import { useShow } from "../stores/isShow.js";

export default defineComponent({
  components: { MyHeader, MyFooter, ThankYouModal },
  async setup() {
    const products = useProducts();
    if (products.getProducts.sets) return;
    await products.fetchProducts();
    return;
  },

  computed: {
    thankModal() {
      return useShow().thankModal;
    },
  },
});
</script>
