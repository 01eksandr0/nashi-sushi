<template>
  <nav>
    <ul class="nav-list">
      <li>
        <a
          class="nav-link"
          href="https://www.instagram.com/nashi_sushi_bar/?igshid=NzAzN2Q1NTE%3D"
          target="_blank"
        >
          <v-icon name="bi-instagram" scale="2" />
        </a>
      </li>
      <li class="shop">
        <router-link to="/shop" class="nav-link"
          >Кошик
          <v-icon name="fa-shopping-cart" />
        </router-link>
        <!-- <span v-if="getQuantity" class="quantity">{{}}</span> -->
      </li>
      <li class="menu-btn">
        <button class="nav-link" @click="openMobailMenu">
          <v-icon name="co-menu" />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
// import { mapGetters } from "vuex";
export default {
  name: "NavBar",
  props: {
    openMobailMenu: Function,
  },
  //   computed: mapGetters(["getQuantity"]),
};
</script>

<style lang="scss" scoped>
.nav-list {
  display: flex;
  align-items: center;
  gap: 12px;
}
.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px;
  border: 1px solid #cec7ca;
  border-radius: 15px;
  color: #000;
  transition: color $animation-duration $animation-time-function,
    background-color $animation-duration $animation-time-function;
  & > svg {
    height: 20px;
    width: 20px;
    transition: fill $animation-duration $animation-time-function;
  }
  &:hover,
  &:focus {
    color: $orange;
    background-color: #cec7ca;
  }
  &:hover > svg,
  &:focus > svg {
    fill: $orange;
  }
}
.shop {
  display: none;
}
@include media(tablet) {
  .nav-link {
    padding: 10px;
    & svg {
      width: 24px;
      height: 24px;
    }
  }
  .shop {
    display: block;
    position: relative;
  }
  .quantity {
    position: absolute;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    background-color: $orange;
    top: -5px;
    right: -5px;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;
  }

  .menu-btn {
    display: none;
  }
}
</style>
