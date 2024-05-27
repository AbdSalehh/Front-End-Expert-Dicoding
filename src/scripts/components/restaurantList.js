import { createSkeletonRestaurantTemplate } from '../view/templates/template-creator';

class restaurantList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="content">
                <div class="explore-restaurant">
                    <h1 class="content__label" id="main-content">Explore Restaurants</h1>
                    <div class="filter-wrapper">
                        <search-filter></search-filter>
                    </div>   
                </div>
                <div class="restaurants">
                    ${createSkeletonRestaurantTemplate(10)}
                </div>
                <div class="our-menu">
                    <h1 class="content__label menu" id="main-content">Our Menu</h1>
                    <div class="menu-list">
                        <menu-item title="Seafoods" description="Savor fresh fish, shrimp, and lobster cooked to perfection daily." image="/images/menus/seafoods.jpg"></menu-item>
                        <menu-item title="Japanese Foods" description="Enjoy delicious sushi, sashimi, and tempura with authentic Japanese flavors." image="/images/menus/japan-foods.jpg"></menu-item>
                        <menu-item title="Drinks" description="Refresh with our variety of smoothies, juices, and iced teas." image="/images/menus/drinks.jpg"></menu-item>
                    </div>
                </div>
                <h1 class="content__label popular" id="popular-content">Popular Restaurants</h1>
                <div class="popular-restaurants">
                    ${createSkeletonRestaurantTemplate(3)}
                </div>
                <div class="customers-experience">
                    <h1 class="content__label customers" id="popular-content">Customers Experience</h1>
                    <div class="wrapper">
                        <customers-experience></customers-experience>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('restaurant-list', restaurantList);
