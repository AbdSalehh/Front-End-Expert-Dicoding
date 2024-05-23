import API_ENDPOINT from '../globals/api-endpoint.js';
import errorPage from '../view/pages/errorPage.js';

class RestaurantDbSource {
    static async restaurantList() {
        try {
            const response = await fetch(API_ENDPOINT.RESTO_LIST);
            const responseJson = await response.json();
            return responseJson.restaurants;
        } catch (error) {
            return errorPage(error.message);
        }
    }

    static async detailRestaurant(id) {
        try {
            const response = await fetch(API_ENDPOINT.DETAIL(id));
            const responseJson = await response.json();
            return responseJson?.restaurant;
        } catch (error) {
            return errorPage(error.message);
        }
    }

    static async postReviewRestaurant(data) {
        try {
            const response = await fetch(API_ENDPOINT.POST_REVIEW, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            return response.json();
        } catch (error) {
            return errorPage(error.message);
        }
    }
}

export default RestaurantDbSource;
