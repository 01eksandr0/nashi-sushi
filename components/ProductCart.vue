<template>
  <div class="item">
    <div class="img-container">
      <img
        :src="'https://joinposter.com' + (info.photo_origin || info.photo)"
        alt=""
        class="img"
      />
    </div>
    <div class="text-content">
      <h3 class="title">{{ info.product_name }}</h3>
      <p v-if="info.ingredients" class="ingridients">
        {{
          info.ingredients
            .reduce((text, i) => text + ", " + i.ingredient_name, "")
            .slice(2)
        }}
      </p>
      <div class="bottom">
        <p class="price">{{ info.price[1].slice(0, -2) }} грн</p>
        <div class="control">
          <button
            class="btn-minus"
            v-if="getQuantity"
            @click="discrimProduct(info.product_id)"
          >
            -
          </button>
          <p class="counter" v-if="getQuantity">{{ getQuantity }}</p>
          <button class="btn-plus" @click="addProduct(info)">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useShop } from "../stores/shop";
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
    addProduct(product) {
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
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0px;
  &:hover .img {
    height: 340px;
    width: 340px;
  }
}
.img-container {
  height: 300px;
  width: 300px;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-content {
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
  width: 100%;
}
.img {
  height: 300px;
  width: 300px;
  transition: width $animation-duration $animation-time-function,
    height $animation-duration $animation-time-function;
}
.title {
  font-size: 22px;
}
.ingridients {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
}
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.price {
  color: rgba(0, 0, 0, 0.7);
  font-size: 26px;
}
.control {
  display: flex;
  align-items: center;
  gap: 6px;
}
.btn-minus {
  border-radius: 5px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
  letter-spacing: normal;
  color: #fff;
  background-color: rgb(238, 191, 51);
  transition: color $animation-duration $animation-time-function,
    background-color $animation-duration $animation-time-function;
  &:hover {
    background-color: $orange;
    color: rgba(255, 255, 255, 0.8);
  }
}
.btn-plus {
  padding: 7px 15px;
  border-radius: 5px;
  font-size: 26px;
  color: #fff;
  background-color: lightgreen;
  transition: color $animation-duration $animation-time-function,
    background-color $animation-duration $animation-time-function;
  &:hover {
    background-color: green;
    color: rgba(255, 255, 255, 0.8);
  }
}
.counter {
  font-size: 24px;
}
@include media(desktop) {
  .item {
    width: 280px;
  }
  .img-container {
    width: 280px;
    height: 280px;
  }
}
</style>
