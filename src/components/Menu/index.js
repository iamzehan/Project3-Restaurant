import "./style.css";
import Data from "./menu.json";

const coffeeList = document.createElement("ul");
coffeeList.classList.add("coffee");

const teaList = document.createElement("ul");
teaList.classList.add("tea");

const createCard = (value, list) => {
  const li = document.createElement("li");
  li.id = value.id;
  const img = document.createElement("img");
  img.src = value.image_url;
  const h2 = document.createElement("h2");
  h2.textContent = value.name;
  li.appendChild(img);
  li.appendChild(h2);
  const price = document.createElement("span");
  price.classList.add("price")
  li.appendChild(price);
  if (typeof(value.price) === 'number'){
    price.textContent = value.price;
  }
  else {
  value.size.forEach((size) => {
    const div = document.createElement("div");
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
};

Data.menu.coffee.forEach((value) => {
    createCard(value, coffeeList);
});

Data.menu.tea.forEach((value) => {
    createCard(value, teaList);
});
const Menu = document.createElement("div");
Menu.classList.add("carousel");
Menu.appendChild(coffeeList);
Menu.appendChild(teaList);

export default Menu;
