<template>
  <div>
    <MyHeader />
    <NuxtPage />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useProducts } from "../stores/products.js";
import MyHeader from "../modules/Header/MyHeader.vue";

export default defineComponent({
  components: { MyHeader },
  async setup() {
    const products = useProducts();
    if (products.getProducts.sets) return;
    await products.fetchProducts();
    return;
  },
});
</script>
