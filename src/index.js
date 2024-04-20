import './style.css';
import { renderHome } from './home';
import { renderMenu } from './menu';
import { renderContact } from './contact';

const body = document.querySelector('body');
const content = document.querySelector('.content');
const navButtons = document.querySelectorAll('.nav-button');

export {
    content
};

function ClearContent() {
    while (content.firstChild) {
        content.removeChild(content.lastChild)
    }
};

for (let button of navButtons) {
    button.addEventListener('click', () => {
        if(button.textContent === 'Home') {

            if(button.classList.contains('selected')) {
                return
            } else {
                ClearContent();
            };
            renderHome();
            button.classList.add('selected');
            navButtons[1].classList.remove('selected');
            navButtons[2].classList.remove('selected');
            body.classList.remove('body-menu');
            body.classList.remove('body-contact');

        } else if (button.textContent === 'Menu') {

            if(button.classList.contains('selected')) {
                return
            } else {
                ClearContent();
            };
            renderMenu();
            button.classList.add('selected');
            navButtons[0].classList.remove('selected');
            navButtons[2].classList.remove('selected');
            body.classList.add('body-menu');
            body.classList.remove('body-contact');

        } else if (button.textContent === 'Contact') {

            if(button.classList.contains('selected')) {
                return
            } else {
                ClearContent();
            };
            renderContact();
            button.classList.add('selected');
            navButtons[0].classList.remove('selected');
            navButtons[1].classList.remove('selected');
            body.classList.remove('body-menu');
            body.classList.add('body-contact');
        };
    });
};

renderHome();
navButtons[0].classList.add('selected');