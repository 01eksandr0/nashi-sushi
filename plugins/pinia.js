import { defineNuxtPlugin } from "#app";

// Экспортируем плагин, обернутый в defineNuxtPlugin
export default defineNuxtPlugin((nuxtApp) => {
  // Если вы используете Vue 2, Vue 3 не импортируется из Nuxt.js
  const { createPinia } = nuxtApp.$pinia;

  // Создаем экземпляр Pinia
  const pinia = createPinia();

  // Глобально устанавливаем Pinia для использования в приложении Vue
  nuxtApp.app.use(pinia);
});
