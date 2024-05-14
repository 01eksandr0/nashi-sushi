<template>
  <div @click="$router.push('/shop')" v-if="getQuantity" class="shop-bar">
    <p class="quantity">{{ getQuantity }} товар,</p>
    <p class="sum">{{ getSum }}грн</p>
    <p class="link">Замовити<v-icon name="bi-chevron-right" /></p>
  </div>
</template>

<script>
import { useShop } from "../../stores/shop";
export default {
  computed: {
    getQuantity: () => useShop().getQuantity,
    getSum: () => useShop().getSum,
  },
};
</script>

<style lang="scss" scoped>
.shop-bar {
  position: fixed;
  transform: translateX(-50%);
  bottom: 10px;
  left: 50%;
  z-index: 1;
  background-color: $orange;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border-radius: 30px;
}
.quantity {
  white-space: nowrap;
  color: #fff;
  font-size: 18px;
}
.sum {
  color: #fff;
  font-size: 18px;
}
.link {
  color: #fff;
  font-size: 20px;
  white-space: nowrap;
  &:hover,
  &:focus {
    color: #fff;
  }
}
@include media(tablet) {
  .shop-bar {
    display: none;
  }
}
</style>
