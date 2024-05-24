import FavoriteRestaurantSearchPresenter from '../src/scripts/view/pages/liked-restaurants/favorite-restaurant-search-presenter.js';
import FavoriteRestaurantSearchView from '../src/scripts/view/pages/liked-restaurants/favorite-restaurant-search-view.js';

describe('Searching restaurants', () => {
    let presenter;
    let favoriteRestaurants;
    let view;

    const searchRestaurants = (query) => {
        const queryElement = document.getElementById('searchInput');
        queryElement.value = query;
        queryElement.dispatchEvent(new Event('change'));
    };

    const setRestaurantSearchContainer = () => {
        view = new FavoriteRestaurantSearchView();
        document.body.innerHTML = view.getTemplate();
    };

    const constructPresenter = () => {
        favoriteRestaurants = {
            getAllRestaurant: jest.fn(),
            searchRestaurants: jest.fn(),
        };
        presenter = new FavoriteRestaurantSearchPresenter({
            favoriteRestaurants,
            view,
        });
    };

    beforeEach(() => {
        setRestaurantSearchContainer();
        constructPresenter();
    });

    describe('When query is not empty', () => {
        it('should be able to capture the query typed by the user', () => {
            favoriteRestaurants.searchRestaurants.mockImplementation(() => []);
            searchRestaurants('restaurant a');

            expect(presenter.latestQuery).toEqual('restaurant a');
        });

        it('should ask the model to search for liked restaurants', () => {
            favoriteRestaurants.searchRestaurants.mockImplementation(() => []);
            searchRestaurants('restaurant a');

            expect(favoriteRestaurants.searchRestaurants)
                .toHaveBeenCalledWith('restaurant a');
        });

        it('should show the restaurants found by Favorite restaurants', (done) => {
            document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
                expect(document.querySelectorAll('.restaurant-item').length).toEqual(3);

                done();
            });
            favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
                if (query === 'restaurant a') {
                    return [
                        { id: 111, name: 'restaurant abc' },
                        { id: 222, name: 'ada juga restaurant abcde' },
                        { id: 333, name: 'ini juga boleh restaurant a' },
                    ];
                }
                return [];
            });
            searchRestaurants('restaurant a');
        });

        it('should show the name of the restaurants found by Favorite restaurants', (done) => {
            document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
                const restaurantNames = document.querySelectorAll('.restaurant-item__title');

                expect(restaurantNames.item(0).textContent).toEqual('restaurant abc');
                expect(restaurantNames.item(1).textContent).toEqual('ada juga restaurant abcde');
                expect(restaurantNames.item(2).textContent).toEqual('ini juga boleh restaurant a');

                done();
            });

            favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
                if (query === 'restaurant a') {
                    return [
                        { id: 111, name: 'restaurant abc' },
                        { id: 222, name: 'ada juga restaurant abcde' },
                        { id: 333, name: 'ini juga boleh restaurant a' },
                    ];
                }

                return [];
            });

            searchRestaurants('restaurant a');
        });

        it('should show - when the restaurants returned does not contain a name', (done) => {
            document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
                const restaurantNames = document.querySelectorAll('.restaurant-item__title');
                expect(restaurantNames.item(0).textContent).toEqual('-');

                done();
            });

            favoriteRestaurants.searchRestaurants.mockImplementation((query) => {
                if (query === 'restaurant a') {
                    return [{ id: 444 }];
                }

                return [];
            });

            searchRestaurants('restaurant a');
        });
    });

    describe('When query is empty', () => {
        it('should capture the query as empty', () => {
            favoriteRestaurants.getAllRestaurant.mockImplementation(() => []);
            searchRestaurants(' ');

            expect(presenter.latestQuery.length).toEqual(0);
        });

        it('should show all favorite restaurants', () => {
            favoriteRestaurants.getAllRestaurant.mockImplementation(() => []);
            searchRestaurants('    ');
            expect(favoriteRestaurants.getAllRestaurant)
                .toHaveBeenCalled();
        });
    });

    describe('When no favorite restaurants could be found', () => {
        it('should show the empty message', (done) => {
            document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
                expect(document.querySelectorAll('.restaurant-not-found').length).toEqual(1);
                done();
            });

            favoriteRestaurants.searchRestaurants.mockImplementation((query) => []);

            searchRestaurants('restaurant a');
        });

        it('should not show any restaurant', (done) => {
            document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
                expect(document.querySelectorAll('.restaurant-item').length).toEqual(0);
                done();
            });

            favoriteRestaurants.searchRestaurants.mockImplementation((query) => []);

            searchRestaurants('restaurant a');
        });
    });
});
