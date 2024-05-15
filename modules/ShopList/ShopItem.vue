<template>
  <div class="item">
    <img
      :src="'https://joinposter.com' + (info.photo_origin || info.photo)"
      alt=""
      class="img"
    />
    <div class="text-content">
      <div class="title-container">
        <h3 class="title-item">{{ info.product_name }}</h3>
        <p class="price">
          Всього: {{ info.price[1].slice(0, -2) * getQuantity }} грн
        </p>
      </div>
      <div class="control">
        <button class="minus" @click="discrimProduct(info.product_id)">
          <v-icon name="fa-minus" scale="0.5"></v-icon>
        </button>
        <p class="counter">{{ getQuantity }}</p>
        <button class="plus" @click="updateList(info)">+</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useShop } from "../../stores/shop";
export default {
  name: "ProductCart",
  props: {
    info: Object,
  },
  computed: {
    getQuantity() {
      return (
        useShop().shopList.find(
          (item) => item.product_id === this.info.product_id
        )?.quantity || 0
      );
    },
  },
  methods: {
    updateList(product) {
      useShop().addProduct(product);
    },
    discrimProduct(id) {
      useShop().minusProduct(id);
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  align-items: center;
  gap: 30px;
  border-top: 1px solid #cec7ca;
  border-bottom: 1px solid #cec7ca;
  padding: 20px 0;
}
.img {
  height: 100px;
  width: 100px;
  flex-shrink: 0;
}
.text-content {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
}
.title-container {
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
}
.title-item {
  font-size: 18px;
}
.control {
  display: flex;
  align-items: center;
  gap: 16px;
}
.counter {
  font-size: 22px;
  font-weight: 500;
}
.minus,
.plus {
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  border-radius: 3px;
  transition: color $animation-duration $animation-time-function,
    background-color $animation-duration $animation-time-function;
}
.minus {
  color: #fff;
  background-color: rgb(238, 191, 51);
  &:hover {
    background-color: $orange;
    color: rgba(255, 255, 255, 0.8);
  }
}
.plus {
  color: #fff;
  background-color: lightgreen;
  &:hover {
    background-color: green;
    color: rgba(255, 255, 255, 0.8);
  }
}
@include media(tablet) {
  .text-content {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .title-container {
    flex-direction: row;
    align-items: center;
    gap: 30px;
  }
  .counter {
    font-size: 24px;
  }
  .minus,
  .plus {
    height: 30px;
    width: 30px;
    font-size: 24px;
  }
}
@include media(desktop) {
  .item {
    padding: 20px;
  }
  .title-container {
    display: flex;
    align-items: center;
    gap: 100px;
  }
  .title-item {
    margin: 0;
    font-size: 26px;
  }
}
</style>
