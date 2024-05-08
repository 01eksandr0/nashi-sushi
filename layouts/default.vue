<template>
  <MyHeader />
  <h1>{{ sicret }}</h1>
  <router-view></router-view>
</template>

<script>
import MyHeader from "../modules/Header/MyHeader.vue";
export default {
  data() {
    return {
      sicret: "",
    };
  },
  components: { MyHeader },
};
</script>
