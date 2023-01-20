import getData from './getData.js';

const getCard = function (dataCard) {
  console.log(dataCard);
};

const renderTabs = async (i = 0) => {
  const tabsContent = document.querySelectorAll('.tabs__content');

  const type = tabsContent[i].dataset.base;

  const data = await getData(`db/${type}.json`);

  const listElem = data.map(getCard, type);

  tabsContent[i].textContent = '';

  tabsContent[i].append(...listElem);
};

export default renderTabs;
