import './testStyle.css';
import { mainIcon, headline, description} from './components/Home/index.js';

const content = document.querySelector("#content");


const buttons = document.querySelectorAll("button");

buttons.forEach((button)=> {
    button.classList.add("icon");
})



