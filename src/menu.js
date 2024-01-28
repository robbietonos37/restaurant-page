import ColdbrewImg from './coldbrew-rest.jpeg';
import Cappuccino from './cappo.jpeg';
import Latte from './latte.webp';
import Drip from './drip.jpeg';
import Americano from './americano.webp';
import Choices from './choices.jpeg';

const renderMenu = () => {
    const contentDiv = document.querySelector('#content');

    const menuContainerDiv = document.createElement('div');
    menuContainerDiv.id = "menuContainer";
    contentDiv.appendChild(menuContainerDiv);

    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    const itemInfo1 = document.createElement('p');
    itemInfo1.innerHTML = 'Cold Brew';
    menuItem1.appendChild(itemInfo1);
    const coldbrewImg = new Image();
    coldbrewImg.src = ColdbrewImg;
    menuItem1.appendChild(coldbrewImg);
    menuContainerDiv.appendChild(menuItem1);

    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    const itemInfo2 = document.createElement('p');
    itemInfo2.innerHTML = 'Cappuccino (Hot or Iced)';
    menuItem2.appendChild(itemInfo2);
    const cappuccinoImg = new Image();
    cappuccinoImg.src = Cappuccino;
    menuItem2.appendChild(cappuccinoImg);
    menuContainerDiv.appendChild(menuItem2);

    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');
    const itemInfo3 = document.createElement('p');
    itemInfo3.innerHTML = 'Latte (Hot or Iced)';
    menuItem3.appendChild(itemInfo3);
    const latteImg = new Image();
    latteImg.src = Latte;
    menuItem3.appendChild(latteImg);
    menuContainerDiv.appendChild(menuItem3);

    const menuItem4 = document.createElement('div');
    menuItem4.classList.add('menu-item');
    const itemInfo4 = document.createElement('p');
    itemInfo4.innerHTML = 'Drip Coffee (Hot or Iced)';
    menuItem4.appendChild(itemInfo4);
    const dripImg = new Image();
    dripImg.src = Drip;
    menuItem4.appendChild(dripImg);
    menuContainerDiv.appendChild(menuItem4);

    const menuItem5 = document.createElement('div');
    menuItem5.classList.add('menu-item');
    const itemInfo5 = document.createElement('p');
    itemInfo5.innerHTML = 'Americano (Hot or Iced)';
    menuItem5.appendChild(itemInfo5);
    const americanoImg = new Image();
    americanoImg.src = Americano;
    menuItem5.appendChild(americanoImg);
    menuContainerDiv.appendChild(menuItem5);

    const menuItem6 = document.createElement('div');
    menuItem6.classList.add('menu-item');
    const itemInfo6 = document.createElement('p');
    itemInfo6.innerHTML = 'And many more choices';
    menuItem6.appendChild(itemInfo6);
    const choicesImg = new Image();
    choicesImg.src = Choices;
    menuItem6.appendChild(choicesImg);
    menuContainerDiv.appendChild(menuItem6);

    return contentDiv;
}

export { renderMenu };