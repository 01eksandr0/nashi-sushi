export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  css: ["~/styles/_base.scss"],
  plugins: ["~/plugins/oh-vue-icons.js"],
  modules: ["@pinia/nuxt"],
  pinia: {
    enable: true,
    autoInstall: true,
    stores: [{ store: "~/stores/products.js", name: "products" }],
  },
  serverMiddleware: [{ path: "/api", handler: "~/middleware/pinia.js" }],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/styles/_constans.scss" as *;',
        },
      },
    },
  },
});
