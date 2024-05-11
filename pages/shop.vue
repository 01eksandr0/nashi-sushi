<template>
  <main class="main">
    <ShopList />
    <ShopForm v-if="getSum" />
  </main>
</template>

<script>
import ShopList from "../modules/ShopList/ShopList.vue";
import ShopForm from "../modules/ShopForm/ShopForm.vue";
import { useShop } from "../stores/shop";
export default {
  components: { ShopList, ShopForm },
  computed: {
    getSum() {
      return useShop().getSum;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 20px 0;
}
@include media(tablet) {
  .main {
    padding: 40px 0 30px;
  }
}
</style>
