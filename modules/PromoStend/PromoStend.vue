<template>
  <section>
    <Container>
      <div class="img-container">
        <img
          class="img"
          src="https://img.postershop.me/cdn-cgi/image/width=1024,format=webp/https://img.postershop.me/13667/Slides/48706_1701714548.214_original.jpg"
          alt=""
        /></div
    ></Container>
  </section>
</template>

<script>
export default {
  name: "PromoStend",
};
</script>

<style lang="scss" scoped>
.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  overflow: hidden;
}
@include media(tablet) {
  .img-container {
    height: 300px;
  }
}
@include media(desktop) {
  .img-container {
    height: 400px;
  }
}
</style>
