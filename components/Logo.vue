<template>
  <a class="link" href="/"
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
.link {
  flex-shrink: 0;
}
@include media(tablet) {
  .logo-img {
    height: 40px;
  }
}
@include media(desktop) {
  .logo-img {
    height: 50px;
  }
}
</style>
