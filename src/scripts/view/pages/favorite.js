import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';
import { displayRestaurants, filterRestaurants } from '../../utils/filter-restaurants.js';

const Favorite = {
    async render() {
        return `
            <restaurant-list></restaurant-list>
        `;
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
        const restoList = document.querySelector('.restaurants');
        const popularTitle = document.querySelector('#popular-content');
        const popularRestoList = document.querySelector('.popular-restaurants');
        const hero = document.querySelector('hero-bar');
        const contentLabel = document.querySelector('.content__label');
        const skipLink = document.querySelector('skip-to-content>a');
        const content = document.querySelector('.content');
        const mainContent = document.querySelector('#main-content');
        const loader = document.querySelector('loader-component');
        const ourMenu = document.querySelector('.our-menu');
        const customersExperience = document.querySelector('.customers-experience');
        const searchInput = document.querySelector('#searchInput');
        const filterOptions = document.querySelector('#filterOptions');

        window.scrollTo(0, 0);
        mainContent.setAttribute('tabindex', '-1');
        skipLink.setAttribute('href', '#main-content');

        popularTitle.style.display = 'none';
        popularRestoList.style.display = 'none';
        ourMenu.style.display = 'none';
        customersExperience.style.display = 'none';
        hero.style.display = 'none';
        loader.style.display = 'flex';

        await new Promise((resolve) => setTimeout(resolve, 1000));

        content.style.marginTop = '110px';
        contentLabel.textContent = 'Favorite Restaurants';

        const filterAndUpdateUI = () => {
            const filteredRestaurants = filterRestaurants(restaurants, searchInput.value, filterOptions.value);
            displayRestaurants(filteredRestaurants, restoList);
        };

        searchInput.addEventListener('input', filterAndUpdateUI);
        filterOptions.addEventListener('change', filterAndUpdateUI);

        displayRestaurants(restaurants, restoList);

        loader.style.display = 'none';

        restaurants.length === 0 ? (content.style.height = '100vh') : content.style.height = 'auto';
    },
};

export default Favorite;
