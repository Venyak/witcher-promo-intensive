const renderTabs = async (i = 0) => {
  const tabsContent = document.querySelectorAll('.tabs__content');

  const type = tabsContent[i].dataset.base;
  console.log(type);
};

export default renderTabs;
