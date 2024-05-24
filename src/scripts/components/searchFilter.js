class searchFilter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="search-container">
                <i class="fa-solid fa-magnifying-glass"></i>
                <label for="searchInput" style="display: none;">Search by name</label>
                <input type="text" id="searchInput" name="searchInput" placeholder="Search by name...">
            </div>
            <label for="filterOptions" style="display: none;">Filter by</label>
            <select id="filterOptions" name="filterOptions">
                <option value="all" selected>Filter by</option>
                <option value="rating">Rating</option>
                <option value="name-asc">Name Ascending</option>
                <option value="name-desc">Name Descending</option>
            </select>
        `;
    }
}
customElements.define('search-filter', searchFilter);
