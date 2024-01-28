import './style.css';
import Icon from './coffee_ultimate.jpeg';
import Icon2 from './coffee-feel.jpeg';

const loadPage = () => {
    const contentDiv = document.querySelector('#content');

    // Add the image to our existing content
    const coffeeImage = new Image();
    coffeeImage.src = Icon;
    contentDiv.appendChild(coffeeImage);

    const newDiv = document.createElement('div');
    newDiv.id = 'pageInfo';
    contentDiv.appendChild(newDiv);

    const coffeeInfo = document.createElement('p');
    coffeeInfo.innerHTML = "Do you feel like you can't get through the day without enough coffee? Do you just like the taste of coffee? Or do you perhaps just like to grab coffee with a friend and happen to be in Portland, OR? If any of these are true then you should stop by Big Rob's Coffeeshop."
    newDiv.appendChild(coffeeInfo);

    const coffeeInfo2 = document.createElement('p');
    coffeeInfo2.innerHTML = 'Established in 2037, we strive to serve all caffeine needs using coffee whether it be in the form of cold brew, espresso, old fashioned coffee, and even more.'
    newDiv.appendChild(coffeeInfo2);

    const coffeeImage2 = new Image();
    coffeeImage2.src = Icon2;
    contentDiv.appendChild(coffeeImage2);

    return contentDiv;
}

export { loadPage };