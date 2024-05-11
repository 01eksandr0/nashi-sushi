<template>
  <div class="phoneContact" @click="active = !active">
    <a class="phoneLink">
      <div class="imageContainer"></div>
    </a>
    <p class="tell">+38 (065) 345-67-89</p>
    <v-icon name="bi-chevron-down" :class="{ 'icon-active': active }" />
    <PhoneModal v-if="active" />
  </div>
  <div
    @click="active = !active"
    :class="{
      phoneContainer: true,
      phoneContainerActive: active,
    }"
  >
    <v-icon name="bi-telephone" :fill="active ? 'rgb(235, 109, 10)' : '#000'" />
    <PhoneModal v-if="active" />
  </div>
</template>

<script>
import PhoneModal from "./PhoneModal.vue";
export default {
  components: { PhoneModal },
  data() {
    return {
      active: false,
    };
  },
  name: "Telephone",
};
</script>

<style lang="scss" scoped>
.tell {
  font-size: 18px;
  transition: color $animation-duration $animation-time-function;
}

.phoneContainer {
  padding: 8px;
  border-radius: 15px;
  margin-left: auto;
  border: 1px solid #cec7ca;
  border-radius: 15px;
  margin-right: 12px;
  transition: background-color $animation-duration $animation-time-function;
  position: relative;
}

.phoneContainerActive {
  background-color: #cec7ca;
}
.icon-active {
  transform: rotate(180deg);
}
@keyframes changeImage {
  0% {
    background-image: url("../../assets/img/telephone/phone.svg");
  }
  50% {
    background-image: url("../../assets/img/telephone/phone_call.svg");
  }
  100% {
    background-image: url("../../assets/img/telephone/icon_call2.svg");
  }
}

.imageContainer {
  width: 28px;
  height: 28px;
  background-repeat: no-repeat;
  animation: changeImage 1.5s infinite;
  @include media(tablet) {
    .mobail {
      display: none;
    }
    .desk {
      display: block;
    }
  }
  @include media(desktop) {
    width: 24px;
    height: 24px;
  }
}
.phoneLink {
  padding: 8px;
  @include media(desktop) {
    padding: 0;
  }
}
.phoneContact {
  display: none;
  gap: 8px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  position: relative;
  padding: 10px;
  border-radius: 15px;
  transition: background-color $animation-duration $animation-time-function;
  &:hover {
    background-color: #cec7ca;
  }
  &:hover .tell {
    color: $orange;
  }
  & svg {
    transition: fill $animation-duration $animation-time-function;
  }
  &:hover svg {
    fill: $orange;
  }
  @include media(tablet) {
    display: flex;
  }
  @include media(desktop) {
    padding: 8px;
  }
}
.numberForDesk {
  color: #2c2727;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: -0.32px;
}
.numberForDesk:hover,
.numberForDesk:focus {
  font-weight: 600;
}

@include media(to-desktop) {
  .numberForDesk {
    display: none;
  }
}
@include media(tablet) {
  .phoneContainer {
    display: none;
  }
}
</style>
