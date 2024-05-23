import CONFIG from '../../globals/config.js';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail">
        <div class="restaurant_item">
            <div class="restaurant_img">
                <div class="button">
                    <div class="like_button"></div>
                </div>
                <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restaurant Image">
            </div>
            <div class="restaurant_detail">
                <div class="restaurant_name">${restaurant.name}</div>
                <p class="restaurant_rating">Rating : <i class="fa-solid fa-star"></i><span> ${restaurant.rating}</span></p>
                <p class="address"><i class="fa-solid fa-map-marker-alt"></i> <span>${restaurant.address}, ${restaurant.city}</span></p>
                <p>Kategori : </p>
                <div class="categories-wrapper">${restaurant.categories.map((categorie) => `<div class="categorie">${categorie.name}</div>`).join(' ')}</div>
                <p>Makanan : </p>
                <div class="foods-wrapper">${restaurant.menus.foods.map((food) => `<div class="food">${food.name}</div>`).join(' ')}</div>
                <p>Minuman : </p>
                <div class="drinks-wrapper">${restaurant.menus.drinks.map((drink) => `<div class="drink">${drink.name}</div>`).join(' ')}</div>
            </div>
        </div>
        <div class="restaurant_desc">
            <div class="menu">Deskripsi :</div>
            <p>${restaurant.description}</p>
        </div>
    </div>
    <div class="card_review_wrapper">
        <div class="review">
            <h2>Customer Reviews</h2>
            <div class="card_review">
                ${restaurant.customerReviews.map((review) => `
                <div class="review_item">
                    <div class="reviewer_item">
                        <i class="fa-solid fa-circle-user"></i>
                        <div class="reviewer">
                            <p>${review.name}</p>
                            <p>${review.date}</p>
                        </div>
                    </div>
                    <div class="desc">
                        <p>${review.review}</p>
                    </div>
                </div>
                `).join('')}
            </div>
        </div>
        <form class="add_review">
            <h2>Add Review</h2>
            <label for="name">Name</label>
            <input type="text" name="name" placeholder="Name" class="inputName" required />
            <label for="review">Review</label>
            <textarea type="text" name="review" placeholder="Review" class="inputDescription" required></textarea>
            <div class="submit">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
`;

const createRestaurantListTemplate = (restaurant, aosDelay) => `
    <article class="restaurant-item" key="${restaurant.id}" data-aos="fade-up" data-aos-easing="linear"
    data-aos-duration="300"
    data-aos-delay="${aosDelay}"
    >
        <p class="restaurant-item__location">Kota. ${restaurant.city}</p>
        <img class="restaurant-item__thumbnail" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Restoran ${restaurant.name} Kota ${restaurant.city}">
        <div class="restaurant-item__content">
            <div class="restaurant-item__name">
                <p class="restaurant-item__rating">Rating : <i class="fa-solid fa-star"></i><span>${restaurant.rating}</span></p>
                <h1 class="restaurant-item__title">${restaurant.name}</h1>
            </div>
            <p class="restaurant-item__description">${restaurant.description}</p>
            <a class="restaurant-item__link" href="/#/detail/${restaurant.id}" aria-label="Lihat Restoran ${restaurant.name}">Lihat Restoran</a>
        </div>
    </article>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this movie" id="likeButton" class="like red">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createRestaurantListTemplate,
    createRestaurantDetailTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};
