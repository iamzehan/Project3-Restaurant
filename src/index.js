import './testStyle.css';

const content = document.querySelector("#content");

const buttons = document.querySelectorAll("button");

buttons.forEach((button)=> {
    button.classList.add("icon");
})

const mainIcon = document.createElement("span");
mainIcon.classList.add("icon");
mainIcon.textContent = 'chef_hat';
content.appendChild(mainIcon);
const headline = document.createElement("h2");
headline.classList.add("headline");
headline.textContent = "Welcome to Restoura";
content.appendChild(headline);
const description = document.createElement("p");
content.appendChild(description);



