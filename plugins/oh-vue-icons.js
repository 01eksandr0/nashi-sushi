import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  BiInstagram,
  RiZhihuFill,
  CoMenu,
  FaShoppingCart,
  BiTelephone,
  BiChevronDown,
  BiChevronRight,
  IoClose,
  IoChevronBack,
} from "oh-vue-icons/icons";

addIcons(
  BiInstagram,
  RiZhihuFill,
  CoMenu,
  FaShoppingCart,
  BiTelephone,
  BiChevronDown,
  BiChevronRight,
  IoClose,
  IoChevronBack
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-icon", OhVueIcon);
});
