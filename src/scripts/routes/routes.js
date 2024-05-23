import Home from '../view/pages/home.js';
import Favorite from '../view/pages/favorite.js';
import Detail from '../view/pages/detail.js';

const routes = {
    '/': Home,
    '/home': Home,
    '/favorite': Favorite,
    '/detail/:id': Detail,
};

export default routes;
