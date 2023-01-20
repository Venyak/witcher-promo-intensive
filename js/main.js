import burgerMenu from './burger.js';
import tabs from './tabs.js';
import renderTabs from './renderTabs.js';

burgerMenu({
  selectorMenu: '.nav__list',
  selectorOpenMenu: 'nav__list-active',
});

tabs({
  selectorTabsBtn: '.tabs__btn',
  activeClassBtn: 'tabs__btn-active',
  selectorTabsItem: '.tabs__item',
  activeClassTab: 'tabs__item-active',
  callback: renderTabs,
});
