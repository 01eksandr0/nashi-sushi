<template>
  <div class="container"><slot></slot></div>
</template>

<script>
export default {
  name: "Container",
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 0 16px;

  @include media(mobile) {
    width: $mobile;
  }

  @include media(tablet) {
    width: $tablet;
    padding: 0 40px;
  }

  @include media(desktop) {
    width: $desktop;
    padding: 0 120px;
  }
}
</style>
