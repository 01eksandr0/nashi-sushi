export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  css: ["~/styles/_base.scss"],
  plugins: ["~/plugins/oh-vue-icons.js"],
  modules: ["@pinia/nuxt"],
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
