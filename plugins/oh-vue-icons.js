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
  BiStarFill,
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
  FaMinus,
  BiStarFill
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("v-icon", OhVueIcon);
});
