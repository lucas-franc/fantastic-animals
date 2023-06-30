import SmoothScroll from './modules/smooth-scroll.js';
import AnimationScroll from './modules/animation-scroll.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import fetchAnimals from './modules/fetch-animals.js';
import DropdownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import initTime from './modules/time.js';
import fetchBitcoins from './modules/fetch-bitcoin.js';

const smoothScroll = new SmoothScroll('[data-menu="smooth"] a[href^="#"]');
smoothScroll.init();
const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();
const tabnav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section",
);
tabnav.init();
const modal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]',
);
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();
fetchAnimals('../../animalsapi.json', '.grid-numbers');
const animationScroll = new AnimationScroll("[data-anime='scroll']");
animationScroll.init();
const dropdownMenu = new DropdownMenu('[data-dropdown]');
dropdownMenu.init();
initMenuMobile();
initTime();
fetchBitcoins('https://blockchain.info/ticker', '.btc-price');
