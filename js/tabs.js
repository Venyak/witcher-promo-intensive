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

  tabsBtns.forEach((btn, i) => {
    console.log(btn, i);
  });
};

export default tabs;
