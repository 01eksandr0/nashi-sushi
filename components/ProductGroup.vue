<template>
  <section>
    <Container>
      <div class="my-container">
        <h2 class="title" :id="list[0].menu_category_id">{{ title }}</h2>
        <ul class="list">
          <li v-for="item in list" :key="item.product_id">
            <ProductCart :info="item" />
          </li>
        </ul></div
    ></Container>
  </section>
</template>

<script>
import ProductCart from "../ProductCart/ProductCart.vue";
export default {
  components: { ProductCart },
  props: {
    list: Array,
    title: String,
  },
};
</script>

<style lang="scss" scoped>
.my-container {
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}
.title {
  font-size: 28px;
}
.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 10px;
}
@include media(tablet) {
  .list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: start;
  }
}
@include media(desktop) {
  .my-container {
    padding: 30px 0;
    gap: 20px;
  }
  .list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 18px;
    justify-content: center;
  }
  .title {
    font-size: 34px;
  }
}
</style>
