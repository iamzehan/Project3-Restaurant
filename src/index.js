import "./testStyle.css";
import Home from "./components/Home/index.js";

function main() {
  const content = document.querySelector("#content");

  // Create page loader function
  const loadPage = (pageName, clicked = false) => {
    content.innerHTML = "";
    if (pageName == "Home") {
      Home.forEach((item) => content.appendChild(item));
    }
    if (clicked) {
      console.log(`${pageName} was clicked!`);
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
    button.addEventListener("click", () => {
      loadPage(button.textContent, true);
    });
  });
}
 main();
