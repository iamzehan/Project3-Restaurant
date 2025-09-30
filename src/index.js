import './testStyle.css';
import Home from './components/Home/index.js';

const content = document.querySelector("#content");

document.addEventListener("DOMContentLoaded", function(){
    Home.forEach((item)=> content.appendChild(item) );
})


const buttons = document.querySelectorAll("button");

buttons.forEach((button)=> {
    button.classList.add("icon");
})



