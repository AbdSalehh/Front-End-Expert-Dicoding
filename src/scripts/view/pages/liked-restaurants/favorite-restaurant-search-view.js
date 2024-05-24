import { createRestaurantListTemplate } from '../../templates/template-creator.js';

class FavoriteRestaurantSearchView {
    getTemplate() {
        return `
            <div class="content">
                <div class="explore-restaurant">
                    <h1 class="content__label" id="main-content">Favorite Restaurants</h1>
                    <div class="filter-wrapper">
                        <div class="search-container">
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" id="searchInput" placeholder="Search by name...">
                        </div>
                    </div>   
                </div>
                <div class="restaurants" id="restaurants"></div>
            </div>
        `;
    }

    runWhenUserIsSearching(callback) {
        document.getElementById('searchInput').addEventListener('change', (event) => {
            callback(event.target.value);
        });
    }

    showFavoriteRestaurants(restaurants = []) {
        let html;
        if (restaurants.length) {
            html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantListTemplate(restaurant)), '');
        } else {
            html = this._getEmptyRestaurantTemplate();
        }

        document.getElementById('restaurants').innerHTML = html;

        document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
    }

    _getEmptyRestaurantTemplate() {
        return `
        <div class="restaurant-not-found">Tidak ada restoran.</div>`;
    }
}

export default FavoriteRestaurantSearchView;
