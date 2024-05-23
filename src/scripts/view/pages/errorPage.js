const errorPage = (error) => {
    const body = document.querySelector('body');
    const errorPg = document.createElement('div');
    errorPg.setAttribute('class', 'error-page');
    body.innerHTML = '';
    errorPg.innerHTML = `
        <div class="error-page__content">
            <div class="error-page__title">Ooops!</div>
            <p class="error-page__message">400 - Bad Request</p>
            <div class="error-page__desc">Your device is offline. Check your internet connection, then refresh the page.</div>
            <p class="click-here">Click the reload button below to refresh the page.</p>
            <button onclick="window.location.reload()">Refresh</button>
        </div>
    `;
    body.appendChild(errorPg);
};

export default errorPage;
