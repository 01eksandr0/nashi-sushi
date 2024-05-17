<template>
  <section>
    <Container>
      <h2 class="title">Оформлення замовлення</h2>
      <form @submit.prevent class="form">
        <div class="inputs">
          <label class="label"
            >Імʼя
            <MyInput
              :type="'input'"
              v-model="userName"
              :placeholder="'Ваше імʼя'"
          /></label>
          <label class="label"
            >Номер телефону
            <MyInput
              :type="'input'"
              v-model="userPhone"
              :placeholder="'Ваш номер телефону'"
          /></label>
        </div>
        <div class="radio-group">
          <label class="radio-label"
            ><input
              class="radio"
              type="radio"
              value="takeaway"
              v-model="typeOrder"
            /><span
              :class="{
                'custom-radio-left': true,
                'active-radio': typeOrder === 'takeaway',
              }"
              >Самовивіз</span
            ></label
          >
          <label class="radio-label"
            ><input
              class="radio"
              type="radio"
              value="delivery"
              v-model="typeOrder"
            /><span
              :class="{
                'custom-radio-right': true,
                'active-radio': typeOrder === 'delivery',
              }"
              >Доставка</span
            ></label
          >
        </div>
        <div v-if="typeOrder === 'takeaway'">
          <div class="inputs">
            <MySelect
              :list="['Наші Суші']"
              :title="'Виберіть заклад'"
              @getValue="(value) => (restoran = value)"
            />
            <MySelect
              :title="'Виберіть час'"
              :list="list"
              @getValue="(value) => (time = value)"
            />
          </div>
          <MySelect
            :title="'Виберіть спосіб оплати'"
            :list="['Готівка', 'Банківська карта']"
            @getValue="(value) => (payment = value)"
          />
        </div>
        <div v-else>
          <div class="inputs">
            <label class="label"
              >Адреса
              <MyInput
                :type="'input'"
                :placeholder="'проспект Червоної Калини 1'"
            /></label>
            <label class="label"
              >Додаткова інформація
              <MyInput
                :type="'input'"
                :placeholder="'1 підʼїзд, 2 поверх квартира 3'"
            /></label>
          </div>
          <div class="inputs">
            <MySelect :title="'Виберіть час доставки'" :list="list" />
            <MySelect
              :title="'Виберіть спосіб оплати'"
              :list="['Готівка', 'Банківська карта']"
            />
          </div>
        </div>

        <label class="label">
          Коментар
          <MyInput
            :placeholder="'Тут ви можете залишити свій коментар до замовлення...'"
            :type="'textarea'"
        /></label>
        <div class="person-quantity">
          <p class="person-title">Кількість персон</p>
          <ul class="person-list">
            <li>
              <button
                class="person-btn"
                type="button"
                @click="() => personQuantity > 0 && personQuantity--"
              >
                <v-icon name="fa-minus" scale="0.5"></v-icon>
              </button>
            </li>
            <li>
              <p>{{ personQuantity }}</p>
            </li>
            <li>
              <button
                @click="personQuantity++"
                class="person-btn"
                type="button"
              >
                +
              </button>
            </li>
          </ul>
        </div>
        <div class="inputs">
          <p class="price">
            До сплати: <span class="sum"> {{ getSum }}грн</span>
          </p>
          <button class="btn" @click="handleSubmit">Замовити</button>
        </div>
      </form>
    </Container>
  </section>
</template>

<script>
import { generateTimeIntervals } from "../../helpers/generateTimeIntervals.js";
import { useShop } from "../../stores/shop";
import { useShow } from "../../stores/isShow";
export default {
  name: "ShopForm",
  data() {
    return {
      userName: "",
      userPhone: "",
      typeOrder: "takeaway",
      restoran: "Наші Суші",
      time: "Найближчий час",
      list: generateTimeIntervals(),
      payment: "Готівка",
      comment: "",
      personQuantity: 0,
      orderError: { name: false, phone: false, person: false },
    };
  },
  computed: {
    getSum() {
      return useShop().getSum;
    },
  },
  methods: {
    async handleSubmit() {
      if (!this.userName) {
        this.orderError.name = true;
      } else this.orderError.name = false;
      if (!this.userPhone) {
        this.orderError.phone = true;
      } else this.orderError.phone = false;
      if (!this.personQuantity) {
        this.orderError.person = true;
      } else this.orderError.person = false;
      if (this.userName && this.userPhone && this.personQuantity) {
        useShop().deleteShop(true);
        this.$router.push("/");
        useShow().changeThankModal(true);
      } else return;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  margin-bottom: 20px;
}
.label {
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  margin-bottom: 10px;
}
.radio-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  height: 40px;
}

.radio {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
}
.radio-label {
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
}
.custom-radio-left,
.custom-radio-right {
  height: 30px;
  width: 100%;
  display: block;
  color: $orange;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  transition: color $animation-duration $animation-time-function,
    background-color $animation-duration $animation-time-function;
  cursor: pointer;
}
.active-radio {
  background-color: $orange;
  color: #fff;
}
.custom-radio-left {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
.custom-radio-right {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
}
.price {
  font-size: 18px;
  white-space: nowrap;
}
.sum {
  color: $orange;
}
.btn {
  height: 50px;
  width: 100%;
  background-color: #fff;
  color: $orange;
  border: 1px solid $orange;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  margin-top: 10px;
  transition: color $animation-duration $animation-time-function,
    background-color $animation-duration $animation-time-function;
  &:hover,
  &:focus {
    background-color: $orange;
    color: #fff;
  }
}
.person-quantity {
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
}
.person-title {
  font-size: 18px;
}
.person-list {
  display: flex;
  align-items: center;
  gap: 8px;
}
.person-btn {
  width: 25px;
  height: 25px;
  background-color: $orange;
  color: #fff;
  font-size: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
  border-radius: 50%;
}
@include media(tablet) {
  .form {
    width: 700px;
  }
  .title {
    text-align: start;
  }
  .inputs {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 15px;
  }
}
@include media(desktop) {
  .btn {
    height: 50px;
  }
  .custom-radio-left,
  .custom-radio-right {
    height: 40px;
    margin-bottom: 20px;
  }
}
</style>
