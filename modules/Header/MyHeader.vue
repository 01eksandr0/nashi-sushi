<template>
  <header class="header">
    <Container>
      <div class="container-header">
        <Logo />
        <!-- <Telephone /> -->
        <!-- <NavBar :openMobailMenu="openMobailMenu" /> -->
      </div>
    </Container>
    <!-- <FilterScroll v-if="$route.path === '/' && getProducts.drinks" /> -->
    <!-- <MobailMenu v-if="isMobailMenu" :closeModalMenu="closeModalMenu" /> -->
  </header>
</template>

<script>
import MobailMenu from "../MobailMenu/MobailMenu.vue";
import NavBar from "./NavBar.vue";
import Telephone from "./Telephone.vue";
import FilterScroll from "./FilterScroll.vue";

export default {
  components: { NavBar, Telephone, FilterScroll, MobailMenu },
  data() {
    return {
      isMobailMenu: false,
    };
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
  left: 10px;
  right: 10px;
  border-radius: 20px;
  z-index: 2;
}
.container-header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
}
@include media(tablet) {
  .header {
    padding: 16px 0;
  }
}
</style>
