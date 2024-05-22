<template>
  <div class="modal">
    <button class="close-btn" @click="closeModalMenu">
      <v-icon name="io-close" scale="2" />
    </button>
    <ul class="list">
      <li v-for="value in getProducts" :key="value[0].menu_category_id">
        <a
          @click="closeModalMenu"
          :href="'#_' + value[0].menu_category_id"
          class="list-link"
          >{{ value[0].category_name }}</a
        >
      </li>
    </ul>
    <ul class="address-list">
      <li>
        <a class="phone-link" href="tel:+380671868667">+38 (067) 186 86 67</a>
      </li>
      <li>
        <a class="phone-link" href="tel:+380505643977">+38 (050) 564 39 77</a>
      </li>
      <li><ListIcon /></li>
    </ul>
  </div>
</template>

<script>
import { useProducts } from "../../stores/products";
export default {
  name: "MobailMenu",
  props: {
    closeModalMenu: Function,
  },
  computed: {
    getProducts() {
      return useProducts().getProducts;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  background-color: #f5f5f7;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow-x: auto;
  padding: 60px 20px;
}
.close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: transparent;
  outline: none;
  position: absolute;
  top: 12px;
  right: 12px;
  & > svg {
    stroke: #000;
  }
}
.list {
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  gap: 30px 20px;
}
.list-link {
  padding: 10px 15px;
  color: #000;
  font-size: 20px;
  white-space: nowrap;
  border-radius: 20px;
  background-color: #fff;
}
.address-list {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
}
.phone-link {
  color: #000;
  font-size: 18px;
}
</style>
