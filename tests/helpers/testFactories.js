import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter.js';
import FavoriteRestaurantIdb from '../../src/scripts/data/favorite-restaurant-idb.js';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
    await LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('.like-button'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant,
    });
};

export { createLikeButtonPresenterWithRestaurant };
