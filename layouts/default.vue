<template>
  <div>
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

export default defineComponent({
  components: { MyHeader, MyFooter },
  async setup() {
    const products = useProducts();
    if (products.getProducts.sets) return;
    await products.fetchProducts();
    return;
  },
});
</script>
