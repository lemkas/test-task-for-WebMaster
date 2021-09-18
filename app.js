const chair = {
  imgUrl:
    "https://wallytally.ru/upload/iblock/de1/de1fa37da355f7697215a9ee38accaa6.jpg",
  contentCard: 'Парикмахреское кресло "Норм" гидравлическое',
  priceCard: 9900,
  btnText: "Купить",
};

console.log(chair.priceCard);

const container = document.querySelector(".container");

const createCard = () => {
  for (let i = 0; i < 4; i++) {
    card = document.createElement("div");
    card.classList.add("card");
    container.appendChild(card);
    createEl("img", "card-img", "src", chair.imgUrl, null);
    createEl("p", "card-content", null, null, chair.contentCard);
    createEl("p", "card-price", null, null, chair.priceCard);
    createEl("a", "card-btn", "href", "#", chair.btnText);
  }
};

const createEl = (elem, elClass, atName, atValue, content) => {
  const el = document.createElement(elem);
  el.classList.add(elClass);
  el.setAttribute(atName, atValue);
  el.innerHTML = content;
  card.appendChild(el);
};

createCard();

//const makeCard = () => {
//   const card = document.createElement("div")
//   card.classList.add('card')
//   const img = document.createElement('img')
//   img.classList.add('card-img')
//   const content = document.createElement('p')
//   content.classList.add('card-content')
//   const price = document.createElement('p')
//   price.classList.add('card-price')

//   img.setAttribute('src', imgUrl)
//   content.innerHTML = contentCard
//   price.innerHTML = priceCard

//   card.appendChild(img);
//   card.appendChild(content);
//   card.appendChild(price);

// };
