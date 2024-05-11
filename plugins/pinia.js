import { createPinia } from "pinia";
import Vue from "vue";

const pinia = createPinia();

// Глобально установите Pinia для использования в приложении Vue
Vue.use(pinia);

// Экспортируйте Pinia, если это необходимо для других модулей
export default pinia;
