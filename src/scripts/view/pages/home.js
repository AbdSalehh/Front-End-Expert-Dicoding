import RestaurantDbSource from '../../data/restaurantdb-source';
import { displayRestaurants, filterRestaurants } from '../../utils/filter-restaurants';

const Home = {
    async render() {
        return `
            <restaurant-list></restaurant-list>
        `;
    },

    async afterRender() {
        const restaurants = await RestaurantDbSource.restaurantList();
        const restoList = document.querySelector('.restaurants');
        const popularRestoList = document.querySelector('.popular-restaurants');
        const searchInput = document.querySelector('#searchInput');
        const filterOptions = document.querySelector('#filterOptions');

        const main = document.querySelector('main');
        const hero = document.querySelector('hero-bar');
        const loader = document.querySelector('loader-component');

        main.style.display = 'none';
        hero.style.display = 'none';
        loader.style.display = 'flex';

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const filterAndUpdateUI = () => {
            const filteredRestaurants = filterRestaurants(restaurants, searchInput.value, filterOptions.value);
            displayRestaurants(filteredRestaurants, restoList);
        };

        searchInput.addEventListener('input', filterAndUpdateUI);
        filterOptions.addEventListener('change', filterAndUpdateUI);

        displayRestaurants(restaurants, restoList);
        displayRestaurants(restaurants.filter((restaurant) => restaurant.rating >= 4.8), popularRestoList);

        loader.style.display = 'none';
        main.style.display = 'block';
        hero.style.display = 'block';
    },
};

export default Home;