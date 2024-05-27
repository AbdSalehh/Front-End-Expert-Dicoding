import CONFIG from '../../globals/config.js';

const small = 'small/';
const medium = 'medium/';

const createSkeletonRestaurantTemplate = (count) => {
    let template = '';

    for (let i = 0; i < count; i += 1) {
        template += `
        <article class="restaurant-item" key="${i}">
            <picture>
                <img class="restaurant-item__thumbnail" src="/images/placeholder.png" alt="skeleton" width="100%" height="350px">
            </picture>
            <div class="restaurant-item__content">
                <div class="restaurant-item__name">
                    <p class="skeleton">Lorem ipsum</p>
                    <h1 class="skeleton">Lorem ipsum dolor sit amet</h1>
                </div>
                <p class="skeleton">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda suscipit libero dolorem magni praesentium incidunt nemo. Eius error vitae dolor magni, quae voluptatum doloribus omnis dicta nostrum libero, aspernatur dolorum aperiam, minima id fugiat obcaecati dolores consequatur tempora rerum ratione? Amet, eos? Iure magni ratione quidem optio in, nulla porro sint praesentium dicta quaerat sit et at quos nemo eius quae eveniet sed, aspernatur voluptas, dolores ea laudantium quo recusandae placeat. Ut dicta beatae consequuntur tempore consectetur necessitatibus quas eum voluptates a. Libero ex esse repudiandae, laborum magni adipisci perferendis! Reiciendis illum quo, beatae doloribus accusantium dolores autem similique unde!</p>
            </div>
        </article>
    `;
    }
    return template;
};

const createSkeletonRestaurantDetail = () => {
    let template = '';

    template += `
        <div class="detail">
            <div class="restaurant_item">
                <div class="restaurant_img">
                    <img src="/images/placeholder.png" alt="skeleton">
                </div>
                <div class="restaurant_detail">
                    <div class="skeleton">Lorem ipsum</div>
                    <p class="skeleton">Lorem ipsum dolor sit amet</p>
                    <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci</p>
                    <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci</p>
                    <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis</p>
                </div>
            </div>
            <div class="restaurant_desc">
                <p class="skeleton">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
            </div>
        </div>
    `;
    return template;
};

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail">
        <div class="restaurant_item">
            <div class="restaurant_img">
                <div class="button">
                    <div class="like_button"></div>
                </div>
                <picture>
                    <source class="lazyload" media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL + small + restaurant.pictureId}">
                    <img class="lazyload" src="/images/placeholder.png"
                        data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + medium + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="Restoran ${restaurant.name || '-'} Kota ${restaurant.city}">
                </picture>
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

const createRestaurantListTemplate = (restaurant) => `
    <article class="restaurant-item" key="${restaurant.id}">
        <p class="restaurant-item__location">Kota. ${restaurant.city || '-'}</p>
        <picture>
            <source class="lazyload" media="(max-width: 600px)" data-srcset="${CONFIG.BASE_IMAGE_URL + small + restaurant.pictureId}">
            <img class="restaurant-item__thumbnail lazyload" src="/images/placeholder.png"
            data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + medium + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="Restoran ${restaurant.name || '-'} Kota ${restaurant.city}">
        </picture>
        <div class="restaurant-item__content">
            <div class="restaurant-item__name">
                <p class="restaurant-item__rating">Rating : <i class="fa-solid fa-star"></i><span>${restaurant.rating || '-'}</span></p>
                <h1 class="restaurant-item__title">${restaurant.name || '-'}</h1>
            </div>
            <p class="restaurant-item__description">${restaurant.description || '-'}</p>
            <a class="restaurant-item__link" href="/#/detail/${restaurant.id}" aria-label="Lihat Restoran ${restaurant.name || '-'}">Lihat Restoran</a>
        </div>
    </article>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like red">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
    createSkeletonRestaurantTemplate,
    createSkeletonRestaurantDetail,
    createRestaurantListTemplate,
    createRestaurantDetailTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};
