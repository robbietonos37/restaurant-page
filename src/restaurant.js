const loadPage = () => {
    const contentDiv = document.querySelector('#content');
    const coffeeHeader = document.createElement('h1');
    coffeeHeader.innerHTML = "Big Rob's Coffee Shop";
    contentDiv.appendChild(coffeeHeader);

    const newDiv = document.createElement('div');
    newDiv.id = 'pageInfo';
    newDiv.innerHTML = "Big Rob's coffee shop opened its doors in 2037"
    contentDiv.appendChild(newDiv);

    return contentDiv;
} 

export {loadPage};