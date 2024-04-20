import { content } from './index';

const renderContact = () => {
    const card = document.createElement('div');
    const number = document.createElement('div');
    const address = document.createElement('div');
    const map = document.createElement('div');

    card.setAttribute('class', 'card');
    number.setAttribute('class', 'number');
    address.setAttribute('class', 'address');
    map.setAttribute('class', 'map');

    number.textContent = '☎️ +63 069 420 143';
    address.textContent = '🏠 G/F, Main Mall, Seaside Blvd, 123, Pasay, 1300 Metro Manila';

    content.appendChild(card);
    card.appendChild(number);
    card.appendChild(address);
    card.appendChild(map);

    content.classList.remove('content-menu');
};

export {
    renderContact
};