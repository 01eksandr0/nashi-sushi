<template>
  <ul class="icon-list">
    <li>
      <a
        class="icon-link"
        href="https://www.instagram.com/nashi_sushi_bar/?igshid=NzAzN2Q1NTE%3D"
        target="_blank"
        ><v-icon name="bi-instagram" scale="2"></v-icon
      ></a>
    </li>
    <li>
      <a class="icon-link" href=""
        ><v-icon name="fa-facebook-f" scale="2"></v-icon
      ></a>
    </li>
    <li>
      <a
        class="icon-link"
        href="https://maps.app.goo.gl/S51cyGQqiVFNCvk4A?g_st=it"
        target="_blank"
        ><v-icon name="md-locationon-sharp" scale="2"></v-icon
      ></a>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.icon-list {
  display: flex;
  align-items: center;
  gap: 12px;
}
.icon-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 8px;
  border: 1px solid #cec7ca;
  border-radius: 15px;
  color: #000;
  transition: color $animation-duration $animation-time-function,
    background-color $animation-duration $animation-time-function;
  & > svg {
    height: 20px;
    width: 20px;
    transition: fill $animation-duration $animation-time-function;
  }
  &:hover,
  &:focus {
    color: $orange;
    background-color: #cec7ca;
  }
  &:hover > svg,
  &:focus > svg {
    fill: $orange;
  }
}
@include media(tablet) {
  .icon-list {
    width: 100%;
  }
}
</style>
