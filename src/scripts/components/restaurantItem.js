class restaurantItem extends HTMLElement {
    set restaurant(restaurant) {
        this._restaurant = restaurant;
        this.render();
    }

    render() {
        const { id, city, name, pictureId, rating, description } = this._restaurant;

        this.innerHTML = `
            <article class="restaurant-item" key="${id}">
                <p class="location">Kota. ${city}</p>
                <img class="restaurant-item__thumbnail" src="${pictureId}" tabindex="0" alt="Restoran ${name} Kota ${city}">
                <div class="restaurant-item__content">
                    <p class="restaurant-item__date">Rating : <i class="fa-solid fa-star"></i><span>${rating}</span></p>
                    <h1 class="restaurant-item__title"><a href="/#/detail/${id}" tabindex="-1">${name}</a></h1>
                    <p class="restaurant-item__description">${description}</p>
                </div>
            </article>
        `;
    }
}

customElements.define('restaurant-item', restaurantItem);
