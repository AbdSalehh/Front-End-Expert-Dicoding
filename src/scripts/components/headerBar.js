class headerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <a class="logo" href="" alt="logo">
                <i class="fa fa-utensils"></i>
                <p class="name">Hunger Apps</p>
            </a>
            <nav>
                <ul id="navigationDrawer" class="nav-list">
                    <li><a href="">Home</a></li>
                    <li><a href="#/favorite">Favorite</a></li>
                    <li><a href="https://www.linkedin.com/in/abdsaleh/" target="_blank">About Us</a></li>
                </ul>
            </nav>
            <button type="button" id="hamburgerButton" aria-label="navigation-menu" tabindex="0">☰</button>
        `;
    }
}

customElements.define('header-bar', headerBar);
