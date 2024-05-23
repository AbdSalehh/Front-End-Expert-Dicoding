import UrlParser from '../../routes/url-parser.js';
import RestaurantDbSource from '../../data/restaurantdb-source.js';
import postReview from '../../utils/addReview.js';
import { createRestaurantDetailTemplate } from '../templates/template-creator.js';
import LikeButtonInitiator from '../../utils/like-button-initiator.js';

const Detail = {
    async render() {
        return `
            <div class="detail_container"></div>
        `;
    },

    async afterRender() {
        const loader = document.querySelector('loader-component');
        const hero = document.querySelector('hero-bar');

        loader.style.display = 'flex';
        hero.style.display = 'none';

        await new Promise((resolve) => setTimeout(resolve, 1000));

        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await RestaurantDbSource?.detailRestaurant(url.id);
        const detailContainer = document.querySelector('.detail_container');
        const skipLink = document.querySelector('skip-to-content>a');

        skipLink?.setAttribute('href', '#likeButton');
        window.scrollTo(0, 0);
        skipLink?.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('#likeButton').focus();
        });

        resto && (detailContainer.innerHTML = createRestaurantDetailTemplate(resto));
        loader.style.display = 'none';

        LikeButtonInitiator.init({
            likeButtonContainer: document.querySelector('.like_button'),
            restaurant: {
                id: resto?.id,
                name: resto?.name,
                pictureId: resto?.pictureId,
                description: resto?.description,
                city: resto?.city,
                rating: resto?.rating,
            },
        });

        const postReviewContainer = document.querySelector('.add_review');
        const nameInput = postReviewContainer?.querySelector('.inputName');
        const reviewInput = postReviewContainer?.querySelector('.inputDescription');

        postReviewContainer?.addEventListener('submit', (event) => {
            event.preventDefault();

            postReview({
                url: url?.id,
                name: nameInput?.value,
                review: reviewInput?.value,
            });

            postReviewContainer.reset();
        });
    },
};

export default Detail;
