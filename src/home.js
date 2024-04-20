import { content } from './index';

const renderHome = () => {
    const greeting = document.createElement('h3');
    const hero = document.createElement('div');
    const orderBtn = document.createElement('button');

    greeting.setAttribute('class', 'greeting');
    hero.setAttribute('class', 'hero');
    orderBtn.setAttribute('class', 'order');

    greeting.textContent = 'We serve the best authentic Japanese food in town!';
    orderBtn.textContent = 'Order Now';

    content.appendChild(greeting);
    content.appendChild(hero);
    content.appendChild(orderBtn);

    content.classList.remove('content-menu');
}

export {
    renderHome
};