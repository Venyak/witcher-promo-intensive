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

  tabsBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      for (let i = 0; i < tabsBtns.length; i++) {
        if (tabsBtns[i] === btn) {
          tabsBtns[i].classList.add(activeClassBtn);
          tabsItems[i].classList.add(activeClassTab);
        } else {
          tabsBtns[i].classList.remove(activeClassBtn);
          tabsItems[i].classList.remove(activeClassTab);
        }
      }
    });
  });
};

export default tabs;
