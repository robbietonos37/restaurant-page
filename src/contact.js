const renderContact = () => {
    const contentDiv = document.querySelector('#content');

    const contactDiv = document.createElement('div');
    contactDiv.id = 'contactContainer';
    contentDiv.appendChild(contactDiv);

    const addressDiv = document.createElement('div');
    addressDiv.classList.add('contact-div');
    const addressHeader = document.createElement('p');
    addressHeader.classList.add('contact-header');
    addressHeader.innerHTML = 'Address';
    const addressInfo = document.createElement('p');
    addressInfo.innerHTML = '1234 Something Rd Portland, OR 97231';
    addressDiv.appendChild(addressHeader);
    addressDiv.appendChild(addressInfo);
    contactDiv.appendChild(addressDiv);

    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('contact-div');
    const phoneHeader = document.createElement('p');
    phoneHeader.classList.add('contact-header');
    phoneHeader.innerHTML = 'Phone Number';
    const phoneNumber = document.createElement('p');
    phoneNumber.innerHTML = '555-555-5555';
    phoneDiv.appendChild(phoneHeader);
    phoneDiv.appendChild(phoneNumber);
    contactDiv.appendChild(phoneDiv);

    const emailDiv = document.createElement('div');
    emailDiv.classList.add('contact-div');
    const emailHeader = document.createElement('p');
    emailHeader.classList.add('contact-header');
    emailHeader.innerHTML = 'Email';
    const emailAddress = document.createElement('p');
    emailAddress.innerHTML = 'BigRobsCoffee@something.com';
    emailDiv.appendChild(emailHeader);
    emailDiv.appendChild(emailAddress);
    contactDiv.appendChild(emailDiv);

    return contentDiv;
}

export { renderContact };