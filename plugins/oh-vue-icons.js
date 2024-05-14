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
  FaFacebookF,
  MdLocationonSharp,
  FaMinus,
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
  IoChevronBack,
  FaFacebookF,
  MdLocationonSharp,
  FaMinus
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-icon", OhVueIcon);
});
