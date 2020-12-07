import refs from "./refs.js";

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const onDarkTheme = () => {
    refs.bodyRef.className = Theme.DARK
};
const onLightTheme = () => {
    refs.bodyRef.className = Theme.LIGHT
};

refs.checkboxRef.checked =
    localStorage.getItem('theme') === 'true' ? true : false;
refs.checkboxRef.checked ? onDarkTheme() : onLightTheme();

refs.checkboxRef.addEventListener('change', event => {
    localStorage.setItem('theme', event.target.checked);
    refs.checkboxRef.checked ? onDarkTheme() : onLightTheme();
});