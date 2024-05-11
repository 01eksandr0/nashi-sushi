// middleware/pinia.js
import { createPinia } from "pinia";

export default function ({ app }) {
  // Создайте экземпляр хранилища Pinia
  const pinia = createPinia();

  // Инъекция хранилища в контекст приложения
  app.use(pinia);
}
