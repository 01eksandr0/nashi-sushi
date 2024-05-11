// middleware/pinia.js
import { defineNuxtPlugin } from "#app";
import { createPinia } from "pinia";

const piniaPlugin = defineNuxtPlugin((nuxtApp) => {
  // Создайте экземпляр хранилища Pinia
  const pinia = createPinia();

  // Инъекция хранилища в контекст приложения
  nuxtApp.app.use(pinia);
});

export default piniaPlugin;
