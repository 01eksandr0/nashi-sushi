<template>
  <header class="header">
    <div class="container">
      <Logo />
      <telephone />
      <nav-bar :openMobailMenu="openMobailMenu" />
    </div>
    <FilterScroll v-if="$route.path === '/' && getProducts.drinks" />
    <MobailMenu v-if="isMobailMenu" :closeModalMenu="closeModalMenu" />
  </header>
</template>

<script>
import MobailMenu from "../MobailMenu/MobailMenu.vue";
import NavBar from "./NavBar.vue";
import Telephone from "./Telephone.vue";
import FilterScroll from "./FilterScroll.vue";
import Logo from "../../components/Logo.vue";
import { useProducts } from "../stores/products";

export default {
  components: { NavBar, Telephone, FilterScroll, MobailMenu, Logo },
  data() {
    return {
      isMobailMenu: false,
    };
  },
  computed: {
    getProducts() {
      return useProducts().getProducts;
    },
  },
  methods: {
    openMobailMenu() {
      this.isMobailMenu = true;
    },
    closeModalMenu() {
      this.isMobailMenu = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding: 8px 0;
  background-color: #fff;
  position: fixed;
  top: 10px;
  left: 0px;
  right: 0px;
  border-radius: 20px;
  z-index: 2;
}
.container {
  display: flex;
  width: 375px;
  margin: 0 auto;
  padding: 0 16px;
}
@include media(tablet) {
  .header {
    padding: 16px 0;
  }
}
</style>
