import ColdbrewImg from './coldbrew-rest.jpeg';
import Cappuccino from './cappo.jpeg';
import Latte from './latte.webp';

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


    menuContainerDiv.appendChild(menuItem2);
    menuContainerDiv.appendChild(menuItem3);

    return contentDiv;
}

export { renderMenu };