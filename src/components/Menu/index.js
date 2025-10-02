import "./style.css";
import Data from "./menu.json";

const createCard = (value, list) => {
  function arrangePrice(classType, category, price) {
    const div = document.createElement("div");
    div.classList.add(classType);
    const h5 = document.createElement("h5");
    const h6 = document.createElement("h6");
    h5.textContent = category;
    h6.textContent = price;
    div.appendChild(h5);
    div.appendChild(h6);
    return div;
  }
  
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

  if (typeof value.price === "number") {
    let div = arrangePrice("single", "Price", value.price);
    price.appendChild(div);
  } else {
    value.size.forEach((size) => {
      let div = arrangePrice("multiple", size, value.price[size]);
      price.appendChild(div);
    });
  }

  li.appendChild(price);

  list.appendChild(li);
};

const createMenu = (key, values) => {
  const list = document.createElement("ul");
  list.classList.add(key);
  values.forEach((value) => {
    createCard(value, list);
  });
  return list;
};

const Menu = document.createElement("div");
Menu.classList.add("carousel");

Object.keys(Data.menu).forEach((key) => {
  Menu.appendChild(createMenu(key, Data.menu[key]));
});

export default Menu;