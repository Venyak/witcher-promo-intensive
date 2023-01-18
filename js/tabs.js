const tabs = (param) => {
  const {
    selectorTabsBtn,
    activeClassBtn,
    selectorTabsItem,
    activeClassTab,
    callback = () => {},
  } = param;

  const tabsBtns = document.querySelectorAll(selectorTabsBtn);
  const tabsItems = document.querySelectorAll(selectorTabsItem);

  tabsBtns.forEach(() => {});
};

export default tabs;
