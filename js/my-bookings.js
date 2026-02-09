document.addEventListener("DOMContentLoaded", () => {
    const bookingsList = document.getElementById("bookingsList");

    // Fake bookings for showcase
    const demoBookings = [
        {
            providerName: "Joseph Kuruvilla",
            service: "Wiring Repair",
            price: 2000,
            status: "Confirmed",
            date: "2026-01-12"
        },
        {
            providerName: "Ajith Kumar",
            service: "Custom Furniture",
            price: 25000,
            status: "Pending",
            date: "2026-01-15"
        },
        {
            providerName: "David Billa",
            service: "Wiring & Installation",
            price: 4000,
            status: "Completed",
            date: "2026-01-08"
        }
    ];

    if (!demoBookings.length) {
        bookingsList.innerHTML = `
            <div class="booking-card">
                <p>No bookings yet.</p>
            </div>
        `;
        return;
    }

    bookingsList.innerHTML = demoBookings.map(b => `
        <div class="booking-card">
            <div class="booking-header">
                <h3>${b.providerName}</h3>
                <span class="booking-status ${b.status.toLowerCase()}">${b.status}</span>
            </div>

            <div class="booking-details">
                <div><span>Service</span><strong>${b.service}</strong></div>
                <div><span>Price</span><strong>Rs ${b.price}</strong></div>
                <div><span>Date</span><strong>${b.date}</strong></div>
            </div>
        </div>
    `).join("");
});
