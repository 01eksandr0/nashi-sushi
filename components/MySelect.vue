<template>
  <div class="wrapper">
    <h2 class="title">{{ title }}</h2>
    <div
      :class="{ 'my-select': true, 'my-select-active': isVisible }"
      @click="isVisible = !isVisible"
    >
      <p class="text">{{ value }}</p>
      <div class="selects" v-if="isVisible">
        <p
          class="select"
          @click="value = item"
          v-for="item in list"
          :key="item"
        >
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySelect",
  props: { list: Array, title: String },
  data() {
    return {
      value: this.list[0],
      isVisible: false,
    };
  },
  watch: {
    value() {
      this.$emit("getValue", this.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 75px;
}
.title {
  font-size: 18px;
  margin: 6px 0;
}
.my-select {
  background-color: #ffff;
  border: 1px solid $orange;
  position: relative;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
}
.my-select-active {
  position: absolute;
  z-index: 1;
}
.selects {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  max-height: 200px;
  overflow-x: auto;
}
.select {
  color: #6a6969;
}
</style>
