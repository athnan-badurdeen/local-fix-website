// Dashboard Functions

/**
 * Display providers in grid
 * @param {Array} providers - Array of provider objects
 */
function displayProviders(providers) {
    const grid = document.getElementById('providersGrid');
    
    if (!grid) return;
    
    if (providers.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--gray-500);">No service providers found matching your criteria.</p>';
        return;
    }
    
    grid.innerHTML = providers.map(provider => {
        const initials = provider.name.split(' ').map(n => n[0]).join('');
        const stars = generateStars(provider.rating);
        
        return `
            <div class="provider-card" onclick="viewProvider('${provider.id}')">
                <div class="provider-header">
                    <div class="provider-avatar">
                        ${initials}
                    </div>
                    <div class="provider-details">
                        <h3>${provider.name}</h3>
                        <p class="provider-service">${provider.service}</p>
                    </div>
                </div>
                <div class="provider-rating">
                    <span class="stars">${stars}</span>
                    <span>${provider.rating} (${provider.reviews} reviews)</span>
                </div>
                <p class="provider-price">Starting at Rs ${provider.price}</p>
                <p class="provider-location">📍 ${provider.location}</p>
                <div class="badges">
                    ${provider.verified ? '<span class="badge badge-verified">✓ Verified</span>' : ''}
                    ${provider.available ? '<span class="badge badge-available">Available</span>' : '<span class="badge" style="background: #fee2e2; color: #dc2626;">Busy</span>'}
                </div>
                <button class="btn-primary btn-full" onclick="event.stopPropagation(); viewProvider('${provider.id}')">
                    View Profile
                </button>
            </div>
        `;
    }).join('');
}

/**
 * Navigate to provider profile page
 * @param {string} providerId - Provider ID
 */
function viewProvider(providerId) {
    window.location.href = `provider.html?id=${providerId}`;
}

/**
 * Format date to readable string
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 60) {
        return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
    } else if (diffHours < 24) {
        return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    } else if (diffDays < 7) {
        return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    } else {
        return date.toLocaleDateString();
    }
}