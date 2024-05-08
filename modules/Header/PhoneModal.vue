<template>
  <div class="phone-modal">
    <p class="phone-subtitle">Телефонуйте нам з 11:00 до 21:00 без вихідних</p>
    <a class="phone-link" href="tel:+380671868667">+38 (067) 186 86 67</a>
    <a class="phone-link" href="tel:+380505643977">+38 (050) 564 39 77</a>
  </div>
</template>

<script>
export default {
  name: "PhoneModal",
};
</script>

<style lang="scss" scoped>
.phone-modal {
  position: absolute;
  padding: 15px 10px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  width: 220px;
  border-radius: 10px;
  z-index: 1;
  background-color: #fff;
  top: 50px;
  left: -70px;
  box-shadow: 2px 2px 2px #e8e8e8;
}
.phone-subtitle {
  color: #9e9e9e;
  font-size: 18px;
}
.phone-link {
  color: #000;
  &:hover,
  &:focus {
    color: $orange;
  }
}
@include media(tablet) {
  .phone-modal {
    left: -30px;
    top: 90px;
    padding: 20px;
    width: 300px;
  }
}
@include media(desktop) {
  .phone-modal {
    top: 70px;
  }
}
</style>
