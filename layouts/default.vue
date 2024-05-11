<template>
  <div>
    <MyHeader />
    <h1></h1>
    <NuxtPage />
  </div>
</template>

<script>
import { useProducts } from "../stores/products.js";
import MyHeader from "../modules/Header/MyHeader.vue";
import axios from "axios";

export default {
  components: { MyHeader },

  async asyncData() {
    const response = await axios.get(
      "https://joinposter.com/api/menu.getProducts?token=388658:6876523b828df7f6545d67f8363887d5"
    );
    return { response: response.data.response };
  },
  mounted() {
    console.log(this.$data.response);
  },
};
</script>
