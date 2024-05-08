<template>
  <MyHeader />
  <router-view></router-view>
</template>

<script>
import MyHeader from "../modules/Header/MyHeader.vue";
export default {
  components: { MyHeader },
};
s;
</script>

<style lang="scss" scoped>
h1 {
  font-size: 18px;
  color: $orange;
}
@include media(desktop) {
  h1 {
    color: red;
  }
}
</style>
