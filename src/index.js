import "./testStyle.css";
import Home from "./components/Home/index.js";
import Menu from "./components/Menu/index.js";

function main() {
  const content = document.querySelector("#content");

  // Create page loader function
  const loadPage = (pageName, clicked = false) => {
    content.innerHTML = "";
    if (pageName == "Home") {
      Home.forEach((item) => content.appendChild(item));
    }
    if (pageName == "Menu") {
      Menu.forEach((item) => content.appendChild(item));
    }
  };

  // Load home page on page load
  document.addEventListener("DOMContentLoaded", function () {
    loadPage("Home");
  });

  // get all the buttons
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.classList.add("icon");
    // add events to navigation buttons
    button.addEventListener("click", (e) => {
      buttons.forEach((button) => {
        if (button.textContent === e.target.textContent) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
      loadPage(button.textContent, true);
    });
  });
}
main();
