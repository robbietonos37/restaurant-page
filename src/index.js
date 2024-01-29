import { loadPage } from './restaurant.js';
import { renderMenu } from './menu.js';
import { renderContact } from './contact.js';

console.log('It is working ok')

loadPage();

const menuButton = document.querySelector('#menuButton');

const contentDiv = document.querySelector('#content');

const contactButton = document.querySelector('#contactButton');

menuButton.addEventListener('click', () => {
    loadMenu();
})

function loadMenu() {
    contentDiv.innerHTML = "";
    renderMenu()
}

contactButton.addEventListener('click', () => {
    loadContact();
})

function loadContact() {
    contentDiv.innerHTML = "";
    renderContact();
}



