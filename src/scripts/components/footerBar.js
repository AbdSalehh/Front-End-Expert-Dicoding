class footerBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
            <div id="footer-element" class="footer-element">
                <p>Abd. Saleh &#169; 2024, Dicoding Academy</p>
            </div>
        `;
    }
}

customElements.define("footer-bar", footerBar);
