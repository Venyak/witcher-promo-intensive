import getData from './getData.js';

const getCard = function (dataCard) {
  const li = document.createElement('li');
  li.classList.add('card');

  switch (this) {
    case 'video':
      li.classList.add('card-video');
      li.innerHTML = `
				<a href="${dataCard.link}" class="card__link">
					<figure>
						<img src="${dataCard.preview}" alt="${dataCard.description}" class="card-video__img">
						<figcaption>${dataCard.description}</figcaption>
					</figure>
				</a>
			`;
      break;
    case 'photo':
      li.classList.add('card-photo');
      li.innerHTML = `<img class="card-photo__img" src="${dataCard.link}" alt="${dataCard.description}">`;
      break;
    case 'goods':
      li.classList.add('card-merch');
      li.innerHTML = `
				<article class="merch">
				<img src="${dataCard.picture}" alt="${dataCard.name}" class="merch__img">
				<h2 class="merch__title">
					${dataCard.name}
				</h2>
				<div class="merch__wrapper-buy">
					<p class="merch__price">${dataCard.price}₽</p>
					<button class="merch__btn-buy">
						<svg class="merch__btn-icon">
							<use xlink:href="#add"/>
						</svg>
					</button>
				</div>
				</article>
			`;
      break;

    default:
      li.innerHTML = 'Нет данных';
  }

  return li;
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
