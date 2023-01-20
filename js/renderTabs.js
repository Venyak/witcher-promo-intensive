import getData from './getData.js';

const renderTabs = async (i = 0) => {
  const tabsContent = document.querySelectorAll('.tabs__content');

  const type = tabsContent[i].dataset.base;

  const data = getData;
};

export default renderTabs;
