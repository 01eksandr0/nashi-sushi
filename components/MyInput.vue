<template>
  <input
    v-if="type === 'input'"
    type="text"
    class="input"
    :value="modelValue"
    @input="updateInput"
    :placeholder="placeholder"
  />
  <textarea
    v-if="type === 'textarea'"
    class="textarea"
    :value="modelValue"
    @input="updateInput"
    :placeholder="placeholder"
  ></textarea>
</template>

<script>
export default {
  name: "MyInput",
  props: {
    modelValue: "",
    type: "input" | "textarea",
    placeholder: String,
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 10px;
  padding-left: 15px;
  outline: none;
  transition: border $animation-duration $animation-time-function;
  &:hover,
  &:focus {
    border: 2px solid $orange;
  }
}
.textarea {
  width: 100%;
  border: none;
  border-radius: 10px;
  padding: 20px;
  outline: none;
  transition: border $animation-duration $animation-time-function;
  height: 150px;
  &:hover,
  &:focus {
    border: 2px solid $orange;
  }
}
@include media(desktop) {
  .input {
    height: 50px;
  }
}
</style>
