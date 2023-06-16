import SmoothScroll from "./modules/smooth-scroll.js";
import initAnimationScroll from "./modules/animation-scroll.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initTime from "./modules/time.js";
import initFetchAnimals from "./modules/fetch-animals.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();
const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();
const tabnav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
);
tabnav.init();
initAnimationScroll();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initTime();
initFetchAnimals();
initFetchBitcoin();
