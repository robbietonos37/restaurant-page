import { loadPage } from './restaurant.js';
import { renderMenu } from './menu.js';

console.log('It is working ok')

loadPage();

const menuButton = document.querySelector('#menuButton');

const contentDiv = document.querySelector('#content');

menuButton.addEventListener('click', () => {
    loadMenu();
})

function loadMenu() {
    contentDiv.innerHTML = "";
    renderMenu()
}



