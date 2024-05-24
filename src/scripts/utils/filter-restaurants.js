import { createRestaurantListTemplate } from '../view/templates/template-creator.js';

function filterRestaurants(restaurants, searchText, filterOption) {
    const filtered = restaurants.filter((r) => r.name.toLowerCase().includes(searchText.toLowerCase()));

    if (filterOption !== 'all') {
        switch (filterOption) {
            case 'name-asc':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-desc':
                filtered.sort((a, b) => b.name.localeCompare(a.name));
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
        }
    }

    return filtered;
}

function displayRestaurants(restaurants, restoList) {
    restoList.innerHTML = '';
    if (restaurants.length === 0) {
        restoList.innerHTML = '<div class="restaurant-not-found">Tidak ada restoran.</div>';
    } else {
        let restoIndex = 0;
        restaurants.forEach((restaurant, index) => {
            const template = createRestaurantListTemplate(restaurant);
            restoList.insertAdjacentHTML('beforeend', template);
            restoIndex++;
        });
    }
}

export { filterRestaurants, displayRestaurants };
