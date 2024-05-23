class menuItem extends HTMLElement {
    connectedCallback() {
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        const image = this.getAttribute('image');
        this.innerHTML = `
            <div class="menu-item" data-aos="flip-left" data-aos-easing="linear"
            data-aos-duration="700"
            data-aos-delay="1100">
                <img src="${image}" alt="Menu Item">
                <div class="menu-item__info">
                    <h3>${title}</h3>
                    <p>${description}</p>
                </div>
            </div>
        `;
    }
}
customElements.define('menu-item', menuItem);
