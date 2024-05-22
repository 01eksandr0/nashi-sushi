<template>
  <div class="filter">
    <Container>
      <ul class="scroll-bar">
        <li v-for="value in products" :key="value[0].menu_category_id">
          <a
            :href="'#_' + value[0].menu_category_id"
            class="scroll-link"
            @click.prevent="() => clickLink(`_${value[0].menu_category_id}`)"
            >{{ value[0].category_name }}</a
          >
        </li>
      </ul>
    </Container>
  </div>
</template>

<script>
import { useProducts } from "../../stores/products";
export default {
  name: "FilterScroll",
  computed: {
    products() {
      return useProducts().getProducts;
    },
  },
  methods: {
    clickLink(id) {
      const section = document.getElementById(id);
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => window.scrollBy(0, -100), 700);
    },
  },
};
</script>

<style lang="scss" scoped>
.filter {
  display: none;
}
@include media(tablet) {
  .filter {
    position: absolute;
    top: 100px;
    left: 0;
    right: 0;
    display: block;
  }
  .scroll-bar {
    display: flex;
    width: 100%;
    height: 50px;
    align-items: center;
    justify-content: baseline;
    gap: 20px;
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow: -moz-scrollbars-none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .scroll-link {
    padding: 10px 15px;
    color: #000;
    font-size: 20px;
    white-space: nowrap;
    border-radius: 20px;
    background-color: #fff;
    transition: color $animation-duration $animation-time-function,
      background-color $animation-duration $animation-time-function;
    &:hover,
    &:focus {
      color: $orange;
      background-color: #cec7ca;
    }
  }
}
@include media(desktop) {
  .filter {
    top: 85px;
  }
}
</style>
