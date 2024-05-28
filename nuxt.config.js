export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Наші Суші",
      link: [{ rel: "icon", type: "image/x-icon", href: "/sushi.svg" }],
    },
  },
  devtools: { enabled: true },
  components: true,
  css: ["~/styles/_base.scss"],
  plugins: ["~/plugins/oh-vue-icons.js"],
  modules: ["@pinia/nuxt"],
  pinia: {
    enable: true,
    autoInstall: true,
    stores: [
      { store: "~/stores/products.js", name: "products" },
      { store: "~/stores/shop.js", name: "shop" },
      { store: "~/stores/isShow.js", name: "show" },
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/styles/_constans.scss" as *;',
        },
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://joinposter.com",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
