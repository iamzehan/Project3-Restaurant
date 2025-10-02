import "./style.css";
import Data from "./menu.json";

const createCard = (key, values) => {
  const list = document.createElement("ul");
  list.classList.add(key);
  values.forEach((value) => {
    const li = document.createElement("li");
    li.id = value.id;
    const img = document.createElement("img");
    img.src = value.image_url;
    const h2 = document.createElement("h2");
    h2.textContent = value.name;
    li.appendChild(img);
    li.appendChild(h2);
    const price = document.createElement("div");
    price.classList.add("price");
    li.appendChild(price);
    
    if (typeof value.price === "number") {
      const div = document.createElement("div");
      div.classList.add("single");
      const h5 = document.createElement("h5");
      const h6 = document.createElement("h6");
      h5.textContent = "Price";
      h6.textContent = value.price;
      div.appendChild(h5);
      div.appendChild(h6);
      price.appendChild(div);
    } else {
      value.size.forEach((size) => {
        const div = document.createElement("div");
        div.classList.add("multiple");
        const h5 = document.createElement("h5");
        const h6 = document.createElement("h6");
        h5.textContent = size;
        h6.textContent = value.price[size];
        div.appendChild(h5);
        div.appendChild(h6);
        price.appendChild(div);
      });
    }
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
