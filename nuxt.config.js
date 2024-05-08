const nuxt = defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  css: ["~/styles/_base.scss"],
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
export default nuxt;
