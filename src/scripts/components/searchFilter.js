class searchFilter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="search-container">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" id="searchInput" placeholder="Search by name...">
            </div>
            <select id="filterOptions">
                <option value="all" selected>Filter by</option>
                <option value="rating">Rating</option>
                <option value="name-asc">Name Ascending</option>
                <option value="name-desc">Name Descending</option>
            </select>
        `;
    }
}
customElements.define('search-filter', searchFilter);
