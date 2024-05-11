<template>
  <section>
    <Container>
      <div class="my-container">
        <div class="title-container">
          <button class="btn-back" @click="$router.back()">
            <v-icon name="io-chevron-back" /> Назад
          </button>
          <h2 class="title">Твоє замовлення</h2>
          <p></p>
        </div>
        <ul v-if="getSum">
          <li v-for="item in products" :key="item.product_id">
            <ShopItem v-if="item.quantity" :info="item" />
          </li>
        </ul>
        <p class="else" v-else>
          Ваш кошик порожній :( <br />
          Треба скоріше це виправити
        </p>
        <p v-if="getSum" class="price">
          Сума до сплати: <span class="sum"> {{ getSum }}грн</span>
        </p>
      </div></Container
    >
  </section>
</template>

<script>
import { useShop } from "../../stores/shop.js";
import ShopItem from "./ShopItem.vue";
export default {
  name: "ShopList",
  components: { ShopItem },
  computed: {
    getSum() {
      return useShop().getSum;
    },
    products() {
      return useShop().shopList;
    },
  },
};
</script>
<style lang="scss">
.title-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.btn-back {
  display: flex;
  align-items: center;
  font-size: 16px;
  color: $orange;
}
.title {
  margin: 20px 0;
}
.price {
  font-size: 18px;
  margin: 10px 0;
}
.sum {
  font-weight: 600;
}
.else {
  font-size: 22px;
  text-align: center;
  margin: 100px 0;
}
@include media(desktop) {
  .price {
    margin: 20px 0;
    font-size: 22px;
  }
}
</style>
