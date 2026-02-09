// ===========================
// FILTER AND SEARCH FUNCTIONS
// ===========================

/**
 * Setup filter event listeners on buyer page
 */
function setupFilters() {
    const searchInput = document.getElementById('searchInput');
    const serviceFilter = document.getElementById('serviceFilter');
    const ratingFilter = document.getElementById('ratingFilter');
    const priceFilter = document.getElementById('priceFilter');
    const locationFilter = document.getElementById('locationFilter');

    // Add event listeners
    if (searchInput) {
        searchInput.addEventListener('input', applyFilters);
    }
    if (serviceFilter) {
        serviceFilter.addEventListener('change', applyFilters);
    }
    if (ratingFilter) {
        ratingFilter.addEventListener('change', applyFilters);
    }
    if (priceFilter) {
        priceFilter.addEventListener('change', applyFilters);
    }
    if (locationFilter) {
        locationFilter.addEventListener('change', applyFilters);
    }
}

/**
 * Apply all active filters and update display
 */
function applyFilters() {
    const filters = {
        search: document.getElementById('searchInput')?.value || '',
        service: document.getElementById('serviceFilter')?.value || '',
        rating: document.getElementById('ratingFilter')?.value || '',
        price: document.getElementById('priceFilter')?.value || '',
        location: document.getElementById('locationFilter')?.value || ''
    };

    const filteredProviders = filterProviders(filters);
    displayProviders(filteredProviders);
}

/**
 * Generate star rating HTML
 * @param {number} rating - Rating value
 * @returns {string} HTML string for stars
 */
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    let starsHTML = '';

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHTML += '★';
        } else {
            starsHTML += '☆';
        }
    }

    return starsHTML;
}