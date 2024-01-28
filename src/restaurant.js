import './style.css';
import Icon from './coffee_ultimate.jpeg';

const loadPage = () => {
    const contentDiv = document.querySelector('#content');
    const coffeeHeader = document.createElement('h1');
    coffeeHeader.innerHTML = "Big Rob's Coffee Shop";
    contentDiv.appendChild(coffeeHeader);

    // Add the image to our existing content
    // const coffeeImage = new Image();
    // coffeeImage.src = Icon;
    // contentDiv.appendChild(coffeeImage);

    const newDiv = document.createElement('div');
    newDiv.id = 'pageInfo';
    newDiv.innerHTML = "Big Rob's coffee shop opened its doors in 2037"
    contentDiv.appendChild(newDiv);

    return contentDiv;
}

export { loadPage };