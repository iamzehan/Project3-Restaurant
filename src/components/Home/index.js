import "./style.css";

const Home = document.createElement("div");
Home.classList.add("content");
export const mainIcon = document.createElement("span");
mainIcon.classList.add("icon");
mainIcon.textContent = "chef_hat";
export const headline = document.createElement("h2");
headline.classList.add("headline");
headline.textContent = "Welcome to Restoura";
export const description = document.createElement("p");

[mainIcon, headline, description].forEach((item)=> {
    Home.appendChild(item);
});

export default Home;