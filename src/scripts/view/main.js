import '../components/restaurantList.js'
import resto from '../../public/data/DATA.json'

const main = () => {
    const hamburgerButtonElement = document.querySelector("#hamburgerButton");
    const drawerElement = document.querySelector("#navigation");
    const restaurantList = document.querySelector("restaurant-list");

    restaurantList.restaurants = resto;

    hamburgerButtonElement.addEventListener("click", (event) => {
        drawerElement.classList.toggle("open");
        event.stopPropagation();
        event.preventDefault();
    });

    document.querySelector("#explore-btn").addEventListener("click", () => {
        const element = document.querySelector("#footer-element");
        element.scrollIntoView({ behavior: "smooth" });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('#navigation') && drawerElement.classList.contains('open')) {
            drawerElement.classList.remove('open');
        }
    });
};

export default main;
