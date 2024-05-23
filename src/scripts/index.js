import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import '../styles/responsive.scss';
import './components/heroElement.js';
import './components/searchFilter.js';
import './components/menuItem.js';
import './components/customersExperience.js';
import './components/loader.js';
import './components/skipToMainContent.js';
import './components/headerBar.js';
import './components/footerBar.js';
import './components/restaurantList.js';

import App from './view/app.js';
import swRegister from './utils/sw-register.js';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#navigationDrawer'),
    nav: document.querySelector('#navigationDrawer'),
    favNav: document.querySelector('#navigationDrawer'),
    content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});

document.querySelector('#explore-btn').addEventListener('click', () => {
    const element = document.querySelector('#main-content');
    element.scrollIntoView({ behavior: 'smooth' });
});
