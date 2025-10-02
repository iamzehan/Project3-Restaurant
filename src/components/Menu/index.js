import "./style.css";
import Data from "./menu.json";

const createCard = (value, li) => {

  function arrangePrice(classType, category, price, div) {
    div.classList.add(classType);
    const h5 = document.createElement("h5");
    const h6 = document.createElement("h6");
    h5.textContent = category;
    h6.textContent = price;
    div.appendChild(h5);
    div.appendChild(h6);
  }

  const img = document.createElement("img");
  img.src = value.image_url;
  li.appendChild(img);

  const h2 = document.createElement("h2");
  h2.textContent = value.name;
  li.appendChild(h2);

  const price = document.createElement("div");
  price.classList.add("price");

  if (typeof value.price === "number") {
    const div = document.createElement("div");
    arrangePrice("single", "Price", value.price, div);
    price.appendChild(div);
  } else {
    value.size.forEach((size) => {
      const div = document.createElement("div");
      arrangePrice("multiple", size, value.price[size], div);
      price.appendChild(div);
    });
  }
  li.appendChild(price);
  return li;
};

const createMenu = (key, values) => {
  const list = document.createElement("ul");
  list.classList.add(key);
  values.forEach((value) => {
    const li = document.createElement("li");
    li.id = value.id;
    createCard(value, li);
    list.appendChild(li);
  });
  return list;
};

const Menu = document.createElement("div");
Menu.classList.add("carousel");

Object.keys(Data.menu).forEach((key) => {
  Menu.appendChild(createMenu(key, Data.menu[key]));
});

export default Menu;
