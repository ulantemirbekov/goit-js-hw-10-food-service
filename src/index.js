import './styles.css';
import itemsTemplate from './templates/gallery-items.hbs';
import items from './menu.json';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const refs = {
    foodItems: document.querySelector('.js-menu'),
    markup: itemsTemplate(items),
    checkboxToggle: document.querySelector('.theme-switch__toggle'),
    body: document.querySelector('body'),
};

refs.foodItems.insertAdjacentHTML('afterbegin', refs.markup);
refs.checkboxToggle.addEventListener('change', checkboxState);

if (localStorage.getItem('keyValue')) {
    const checked = JSON.parse(localStorage.getItem('keyValue'));
    refs.checkboxToggle.checked = checked;
    refs.checkboxToggle.checked ? onDarkTheme() : onLightTheme();
}

function checkboxState(event) {
    localStorage.setItem('keyValue', JSON.stringify(event.target.checked));
    event.target.checked ? onDarkTheme() : onLightTheme();
}

function onDarkTheme() {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
}

function onLightTheme() {
    refs.body.classList.add(Theme.LIGHT);
    refs.body.classList.remove(Theme.DARK);
}
