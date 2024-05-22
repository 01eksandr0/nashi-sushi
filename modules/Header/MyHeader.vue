<template>
  <header class="header">
    <Container>
      <div class="container-header">
        <Logo />
        <Telephone />
        <NavBar :openMobailMenu="openMobailMenu" />
      </div>
    </Container>
    <FilterScroll v-if="$route.path === '/' && getProducts.drinks" />
    <MobailMenu v-if="isMobailMenu" :closeModalMenu="closeModalMenu" />
  </header>
</template>

<script>
import MobailMenu from "../MobailMenu/MobailMenu.vue";
import NavBar from "./NavBar.vue";
import Telephone from "./Telephone.vue";
import FilterScroll from "./FilterScroll.vue";
import { useProducts } from "../stores/products";

export default {
  components: { NavBar, Telephone, FilterScroll, MobailMenu },
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
.container-header {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: space-between;
  align-items: center;
}
@include media(tablet) {
  .header {
    padding: 16px 0;
  }
}
</style>
