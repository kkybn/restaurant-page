import { content } from './index';

const renderMenu = () => {
    const itemList = [
        {name: 'Curry Rice', price: '¥ 399'},
        {name: 'Katsudon', price: '¥ 299'},
        {name: 'Miso Soup', price: '¥ 99'},
        {name: 'Okonomiyaki', price: '¥ 199'},
        {name: 'Ramen', price: '¥ 399'},
        {name: 'Sushi', price: '¥ 499'},
        {name: 'Takoyaki', price: '¥ 199'},
        {name: 'Tempura', price: '¥ 299'}
    ];

    for (let i = 0; i < 8; i++) {
        const item = document.createElement('div');
        const photo = document.createElement('div');
        const info = document.createElement('div');
        const name = document.createElement('div');
        const price = document.createElement('div');
        const addBtn = document.createElement('button');

        item.setAttribute('class', 'item');
        photo.setAttribute('class', 'photo');
        info.setAttribute('class', 'info');
        name.setAttribute('class', 'name');
        price.setAttribute('class', 'price');
        addBtn.setAttribute('class', 'add');

        name.textContent = `${itemList[i].name}`;
        price.textContent = `${itemList[i].price}`;
        addBtn.textContent = 'Add to Order';

        content.appendChild(item);
        item.appendChild(photo);
        item.appendChild(info);
        info.appendChild(name);
        info.appendChild(price);
        item.appendChild(addBtn);
    }

    content.classList.add('content-menu');
};

export {
    renderMenu
};