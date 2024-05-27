import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb.js';
import { displayRestaurants, filterRestaurants } from '../../utils/filter-restaurants.js';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view.js';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-restaurant-show-presenter.js';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-restaurant-search-presenter.js';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
    async render() {
        return view.getTemplate();
    },

    async afterRender() {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
        const hero = document.querySelector('hero-bar');
        const skipLink = document.querySelector('skip-to-content>a');
        const content = document.querySelector('.content');
        const mainContent = document.querySelector('#main-content');
        const loader = document.querySelector('loader-component');

        window.scrollTo(0, 0);
        mainContent.setAttribute('tabindex', '-1');
        skipLink.setAttribute('href', '#main-content');

        hero.style.display = 'none';
        loader.style.display = 'flex';

        await new Promise((resolve) => setTimeout(resolve, 1000));

        content.style.marginTop = '110px';

        if (!restaurants) {
            console.log(restaurants);
        } else {
            new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
            new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
        }

        loader.style.display = 'none';

        content.style.minHeight = '80vh';
        restaurants.length === 0 ? (content.style.height = '100vh') : content.style.height = 'auto';
    },
};

export default Favorite;
