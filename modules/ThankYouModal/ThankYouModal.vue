<template>
  <div class="modal-wrapper">
    <div class="modal">
      <button
        class="btn-close"
        type="button"
        @click="useShow().changeThankModal(false)"
      >
        <v-icon name="io-close" scale="1.2" />
      </button>
      <p class="modal-text">
        Дякуємо за ваше замовлення. Невдовзі з вами звʼяжутся для уточння.
      </p>
    </div>
  </div>
</template>

<script>
import { useShow } from "../../stores/isShow";
</script>

<style lang="scss" scoped>
.modal-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal {
  height: 300px;
  width: 280px;
  background-color: #fff;
  border-radius: 30px;
  border: 1px solid $orange;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.btn-close {
  position: absolute;
  top: 16px;
  right: 16px;
  & svg {
    fill: $orange;
  }
}
.modal-text {
  width: 70%;
  text-align: center;
  font-size: 22px;
  color: $orange;
}
</style>
