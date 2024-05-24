const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#searchInput');
    I.see('Tidak ada restoran.', '.restaurant-not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Tidak ada restoran.', '.restaurant-not-found');

    I.amOnPage('/');
    I.wait(2);

    I.seeElement('.restaurant-item__content a');

    const firstRestaurantName = await I.grabTextFrom(locate('.restaurant-item__title').first());

    I.click(locate('.restaurant-item__content a').first());
    I.wait(3);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-item');

    const likedRestaurantName = await I.grabTextFrom('.restaurant-item__title');
    assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking one restaurant', async ({ I }) => {
    I.see('Tidak ada restoran.', '.restaurant-not-found');

    I.amOnPage('/');
    I.wait(2);

    I.seeElement('.restaurant-item__content a');

    const firstRestaurantName = await I.grabTextFrom(locate('.restaurant-item__title').first());

    I.click(locate('.restaurant-item__content a').first());
    I.wait(3);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-item');

    const likedRestaurantName = await I.grabTextFrom('.restaurant-item__title');
    assert.strictEqual(firstRestaurantName, likedRestaurantName);

    I.click('.restaurant-item__content a');
    I.wait(3);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');

    const FavoriteRestaurantIsEmpty = await I.grabTextFrom('.restaurant-not-found');
    assert.strictEqual('Tidak ada restoran.', FavoriteRestaurantIsEmpty);
});

Scenario('Add Review', async ({ I }) => {
    I.see('Tidak ada restoran.', '.restaurant-not-found');

    I.amOnPage('/');

    I.seeElement('.restaurant-item__content a');
    I.click(locate('.restaurant-item__content a').first());

    I.waitForElement('.add_review', 5);
    I.seeElement('.add_review');

    const textReview = 'Enak dan bergiji';
    const outputTextReview = 'Enak dan bergiji';
    I.fillField('input', 'Seseorang');
    I.fillField('textarea', textReview);

    I.click('button[type="submit"]');

    I.waitForElement('.desc p', 10);
    I.seeElement('.desc p');

    const lastReview = locate('.desc p').last();
    const lastReviewText = await I.grabTextFrom(lastReview);

    assert.strictEqual(outputTextReview, lastReviewText);
});

Scenario('searching restaurants', async ({ I }) => {
    I.see('Tidak ada restoran.', '.restaurant-not-found');

    I.amOnPage('/');

    I.seeElement('.restaurant-item__content a');

    const firstRestaurantName = await I.grabTextFrom(locate('.restaurant-item__title').first());

    for (let i = 1; i <= 3; i++) {
        I.click(locate('.restaurant-item__content a').at(i));
        I.waitForElement('#likeButton', 3);
        I.seeElement('#likeButton');
        I.click('#likeButton');
        I.amOnPage('/');
    }

    I.amOnPage('/#/favorite');
    I.seeElement('#searchInput');

    const searchQuery = firstRestaurantName.substring(0, 3);

    I.fillField('#searchInput', searchQuery);
    I.pressKey('Enter');
    I.waitForElement('.restaurant-item', 3);

    const visibleLikedRestaurants = await I.grabTextFrom('.restaurant-item__title');
    assert.strictEqual(visibleLikedRestaurants, firstRestaurantName);
});
