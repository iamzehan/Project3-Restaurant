import "./style.css";
import Data from "./menu.json";

const priceProcessor = (value, price) => {
  function createPrice(classType, header5, header6) {
    const div = document.createElement("div");
    div.classList.add(classType);
    const h5 = document.createElement("h5");
    const h6 = document.createElement("h6");
    h5.textContent = header5;
    h6.textContent = header6;
    div.appendChild(h5);
    div.appendChild(h6);
    price.appendChild(div);
  }

  if (typeof value.price === "number") {
    createPrice("single", "Price", value.price);
  } else {
    value.size.forEach((size) => {
      createPrice("multiple", size, value.price[size]);
    });
  }
};

const createCard = (key, values) => {
  const list = document.createElement("ul");
  list.classList.add(key);
  values.forEach((value) => {
    const li = document.createElement("li");
    li.id = value.id;

    const img = document.createElement("img");
    img.src = value.image_url;
    li.appendChild(img);

    const h2 = document.createElement("h2");
    h2.textContent = value.name;
    li.appendChild(h2);

    const price = document.createElement("div");
    price.classList.add("price");
    priceProcessor(value, price);
    li.appendChild(price);

    list.appendChild(li);
  });
  return list;
};

const Menu = document.createElement("div");
Menu.classList.add("carousel");

Object.keys(Data.menu).forEach((key) => {
  Menu.appendChild(createCard(key, Data.menu[key]));
});

export default Menu;