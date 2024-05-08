<template>
  <a href="/"
    ><img class="logo-img" src="../assets/svg/logo.svg" alt="Logo"
  /></a>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style lang="scss" scoped>
.logo-img {
  height: 30px;
}
@include media(desktop) {
  .logo-img {
    height: 50px;
  }
}
</style>
