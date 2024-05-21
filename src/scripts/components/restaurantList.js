import "./restaurantItem.js"

class restaurantList extends HTMLElement {
    /**
     * @param {any} restaurants
     */
    set restaurants(restaurants) {
        this._restaurants = restaurants;
        this.render();
        this.fetchAndRenderData();
    }

    fetchAndRenderData() {
        const regularRestaurantsContainer = this.querySelector('.restaurants');
        const popularRestaurantsContainer = this.querySelector('.popular-restaurants');

        this._restaurants.restaurants.forEach(restaurant => {
            const restaurantItem = document.createElement('restaurant-item');
            restaurantItem.restaurant = restaurant;

            if (restaurant.rating > 4.6) {
                popularRestaurantsContainer.appendChild(restaurantItem);
            } else {
                regularRestaurantsContainer.appendChild(restaurantItem);
            }
        });
    }

    render() {
        this.innerHTML = `
            <div class="content">
                <h1 class="content__label" id="main-content">Explore Restaurants</h1>
                <div class="restaurants"></div>
                <h1 class="content__label popular" id="main-content">Popular Restaurants</h1>
                <div class="popular-restaurants"></div>
            </div>
        `;
    }
}

customElements.define('restaurant-list', restaurantList);
