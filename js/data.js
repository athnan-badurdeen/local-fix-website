// ===========================
// MOCK DATA FOR LOCALFIX
// ===========================

/**
 * Initialize mock data in localStorage
 * This function creates sample service providers if they don't exist
 */
function initializeMockData() {
    if (!localStorage.getItem('providers')) {
        const providers = [
            {
                id: '1',
                name: 'Saman Kumara',
                service: 'Plumber',
                location: 'Medawachiya',
                rating: 4.8,
                reviews: 24,
                price: 5000,
                available: true,
                verified: true,
                about: 'Experienced plumber with over 8 years in the industry. Specializing in residential and commercial plumbing services. Available for emergency calls 24/7.',
                experience: '10+ years',
                phone: '+94 77 1234 5678',
                experience: {
                    years: '10+ years',
                    description: 'Handled home and office water distribution projects across Anuradhapura district.'
                },

                services: [
                    {
                        title: 'Pipe Repair',
                        description: 'Leak fixing and broken pipe replacement',
                        price: 'Starting at Rs 5,000'
                    },
                    {
                        title: 'Bathroom Fitting',
                        description: 'Complete bathroom plumbing setup',
                        price: 'Starting at Rs 20,000'
                    }
                ],
                certifications: [
                    'Certified Professional Plumber (CPP)',
                    'Safety Training Certified'
                ],
                quickInfo: {
                    responseTime: 'Within 1 hour',
                    experience: '8+ years',
                    languages: 'Sinhala, English',
                    serviceArea: 'Colombo & suburbs'
                },
                booking: {
                    minPrice: 5000,
                    maxPrice: 20000,
                    available: true
                }


            },
            {
                id: '2',
                name: 'Joseph Kuruvilla',
                service: 'Electrician',
                location: 'Panadura',
                rating: 4.9,
                reviews: 32,
                price: 2000,
                available: true,
                verified: true,
                about: 'Certified electrician specializing in home and office electrical work. Expert in wiring, repairs, and installations.',
                experience: '10+ years',
                phone: '+94 77 8765 4321',
                services: [
                    {
                        title: 'Wiring Repair',
                        description: 'Short circuit and wiring fixes',
                        price: 'Starting at Rs 2,000'
                    },
                    {
                        title: 'Appliance Installation',
                        description: 'Fans, lights, switches',
                        price: 'Starting at Rs 3,000'
                    }
                ],
                certifications: [
                    'Licensed Electrician',
                    'High Voltage Safety Certification'
                ],
                experience: {
                    years: '10+ years',
                    description: 'Handled home and office electrical projects across Anuradhapura district.'
                },
                quickInfo: {
                    responseTime: 'Within 2 hours',
                    experience: '10+ years',
                    languages: 'Sinhala, Tamil',
                    serviceArea: 'Anuradhapura'
                },
                booking: {
                    minPrice: 2000,
                    maxPrice: 3000,
                    available: true
                }

            },
            {
                id: '3',
                name: 'Ajith Kumar',
                service: 'Carpenter',
                location: 'Kegalle',
                rating: 4.7,
                reviews: 18,
                price: 5000,
                available: true,
                verified: true,
                about: 'Skilled carpenter with expertise in furniture making, repairs, and custom woodwork.',
                experience: '6+ years',
                phone: '+94 77 2345 6789',
                experience: {
                    years: '6+ years',
                    description: 'Experienced in furniture making, door and window fitting, and custom woodwork for homes and offices.'
                },
                certifications: [
                    'Certified Carpentry Technician',
                    'Advanced Woodworking Safety Training'
                ],
                services: [
                    {
                        title: 'Furniture Repair',
                        description: 'Repair and restoration of wooden furniture',
                        price: 'Starting at Rs 5,000'
                    },
                    {
                        title: 'Custom Furniture',
                        description: 'Custom-made cupboards, beds, tables, and shelves',
                        price: 'Starting at Rs 25,000'
                    },
                    {
                        title: 'Door & Window Fitting',
                        description: 'Installation and repair of doors and windows',
                        price: 'Starting at Rs 8,000'
                    }
                ],
                quickInfo: {
                    responseTime: 'Within 1 hour',
                    experience: '6+ years',
                    languages: 'Sinhala, Tamil, English',
                    serviceArea: 'Kegalle'
                },
                booking: {
                    minPrice: 5000,
                    maxPrice: 25000,
                    available: true
                }

            },
            {
                id: '4',
                name: 'Danush',
                service: 'Mechanic',
                location: 'Jaffna',
                rating: 3.2,
                reviews: 21,
                price: 1000,
                available: true,
                verified: true,
                about: 'Auto mechanic specializing in car and bike repairs. Expert in engine diagnostics and servicing.',
                experience: '12+ years',
                phone: '+94 77 3456 7890',
                experience: {
                    years: '12+ years',
                    description: 'Specialized in car and bike repairs, engine diagnostics, brake systems, and regular vehicle servicing.'
                },
                certifications: [
                    'Certified Automotive Mechanic',
                    'Engine Diagnostics & Safety Certification'
                ],
                services: [
                {
                    title: 'Vehicle Servicing',
                    description: 'Regular full servicing for cars, vans and bikes',
                    price: 'Starting at Rs 4,000'
                },
                {
                    title: 'Engine Repair',
                    description: 'Engine diagnostics and mechanical repairs',
                    price: 'Starting at Rs 10,000'
                },
                {
                    title: 'Brake & Clutch Repair',
                    description: 'Brake system and clutch repair services',
                    price: 'Starting at Rs 1,000'
                }
            ],
            quickInfo: {
                    responseTime: 'Within 1 hour',
                    experience: '12+ years',
                    languages: 'Tamil, English',
                    serviceArea: 'Jaffna'
                },
                booking: {
                    minPrice: 4000,
                    maxPrice: 10000,
                    available: true
                }


            },
            {
                id: '5',
                name: 'Kunjithapatham',
                service: 'Painter',
                location: 'Batticaloa',
                rating: 4.5,
                reviews: 15,
                price: 2500,
                available: true,
                verified: true,
                about: 'Professional painter offering interior and exterior painting services with quality finishes.',
                experience: '7+ years',
                phone: '+94 77 4567 8901',
                experience: {
                    years: '7+ years',
                    description: 'Professional interior and exterior painter with expertise in wall finishes, waterproofing, and texture painting.'
                },
                certifications: [
                    'Certified Professional Painter',
                    'Surface Preparation & Safety Certification'
                ],
                services: [
                    {
                        title: 'Interior Painting',
                        description: 'Wall painting with premium finish',
                        price: 'Starting at Rs 2,500'
                    },
                    {
                        title: 'Exterior Painting',
                        description: 'Weather-resistant exterior painting',
                        price: 'Starting at Rs 3,500'
                    },
                    {
                        title: 'Waterproofing & Texture',
                        description: 'Wall texture painting and waterproofing solutions',
                        price: 'Starting at Rs 4,000'
                    }
                ],
                quickInfo: {
                    responseTime: 'Within 3 hours',
                    experience: '7+ years',
                    languages: 'Tamil',
                    serviceArea: 'Batticaloa'
                },
                booking: {
                    minPrice: 2500,
                    maxPrice: 4000,
                    available: true
                }


            },
            {
                id: '6',
                name: 'Ravi Mohan',
                service: 'AC Technician',
                location: 'Hambantota',
                rating: 4.8,
                reviews: 28,
                price: 2000,
                available: true,
                verified: true,
                about: 'AC repair and maintenance specialist. Expert in installation, servicing, and troubleshooting all AC brands.',
                experience: '9+ years',
                phone: '+94 77 5678 9012',
                experience: {
                    years: '9+ years',
                    description: 'Expert in AC installation, repair, gas refilling, and maintenance for all major air conditioner brands.'
                },
                certifications: [
                    'Certified HVAC Technician',
                    'Refrigerant Handling & Safety Certification'
                ],
                services: [
                {
                    title: 'AC Installation',
                    description: 'Installation of split and window AC units',
                    price: 'Starting at Rs 4,500'
                },
                {
                    title: 'AC Repair',
                    description: 'Cooling issues, noise problems, and part replacement',
                    price: 'Starting at Rs 5,000'
                },
                {
                    title: 'Gas Refilling & Maintenance',
                    description: 'Gas refilling and routine AC maintenance',
                    price: 'Starting at Rs 2,000'
                }
            ],
            quickInfo: {
                    responseTime: 'Within 1 hour',
                    experience: '9+ years',
                    languages: 'Sinhala, Tamil, English',
                    serviceArea: 'Hambantota'
                },
                booking: {
                    minPrice: 2000,
                    maxPrice: 5000,
                    available: true
                }


            },
            {
                id: '7',
                name: 'Surya',
                service: 'Plumber',
                location: 'Kandy',
                rating: 4.4,
                reviews: 12,
                price: 800,
                available: true,
                verified: true,
                about: 'Reliable plumber for all your plumbing needs. Quick response and affordable rates.',
                experience: '5+ years',
                phone: '+94 77 6789 0123',
                experience: {
                    years: '5+ years',
                    description: 'Skilled in residential and commercial plumbing, pipe fitting, leak repairs, and emergency plumbing services.'
                },
                certifications: [
                    'Certified Professional Plumber (CPP)',
                    'Plumbing Safety & Compliance Certification'
                ],
                services: [
                {
                    title: 'Leak Repair',
                    description: 'Fixing pipe and tap leaks',
                    price: 'Starting at Rs 800'
                },
                {
                    title: 'Bathroom Fitting',
                    description: 'Complete bathroom setup and repairs',
                    price: 'Starting at Rs 12,000'
                },
                {
                    title: 'Emergency Plumbing',
                    description: '24/7 emergency plumbing support',
                    price: 'Starting at Rs 2,500'
                }
            ],
            quickInfo: {
                    responseTime: 'Within 1 hour',
                    experience: '5+ years',
                    languages: 'Sinhala, Tamil, English',
                    serviceArea: 'Kandy'
                },
                booking: {
                    minPrice: 800,
                    maxPrice: 12000,
                    available: true
                }


            },
            {
                id: '8',
                name: 'David Billa',
                service: 'Electrician',
                location: 'Matale',
                rating: 4.7,
                reviews: 19,
                price: 1500,
                available: true,
                verified: true,
                about: 'Experienced electrician for residential and commercial electrical solutions.',
                experience: '8+ years',
                phone: '+94 77 7890 1234',
                experience: {
                    years: '8+ years',
                    description: 'Experienced electrician handling home and commercial wiring, appliance installation, and electrical fault repairs.'
                },
                certifications: [
                    'Licensed Electrician',
                    'High Voltage Electrical Safety Certification'
                ],
                services: [
                {
                    title: 'Wiring & Installation',
                    description: 'Home and office wiring solutions',
                    price: 'Starting at Rs 4,000'
                },
                {
                    title: 'Appliance Installation',
                    description: 'Fans, lights, geysers, and inverter installation',
                    price: 'Starting at Rs 2,000'
                },
                {
                    title: 'Electrical Repairs',
                    description: 'Fixing short circuits and power issues',
                    price: 'Starting at Rs 1,500'
                }
            ],
            quickInfo: {
                    responseTime: 'Within 1 hour',
                    experience: '8+ years',
                    languages: 'Sinhala, English',
                    serviceArea: 'Matale'
                },
                booking: {
                    minPrice: 1500,
                    maxPrice: 4000,
                    available: true
                }


            }
        ];
        
        localStorage.setItem('providers', JSON.stringify(providers));
    }
    
    // Initialize bookings array if not exists
    if (!localStorage.getItem('bookings')) {
        localStorage.setItem('bookings', JSON.stringify([]));
    }
}

/**
 * Get all service providers from localStorage
 * @returns {Array} Array of provider objects
 */
function getProviders() {
    const providers = localStorage.getItem('providers');
    return providers ? JSON.parse(providers) : [];
}

/**
 * Get a specific provider by ID
 * @param {string} id - Provider ID
 * @returns {Object|null} Provider object or null
 */
function getProviderById(id) {
    const providers = getProviders();
    return providers.find(provider => provider.id === id) || null;
}

/**
 * Filter providers based on search criteria
 * @param {Object} filters - Filter criteria {search, service, rating, price}
 * @returns {Array} Filtered providers
 */
function filterProviders(filters) {
    let providers = getProviders();
    
    // Search by name or service
    if (filters.search) {
        const searchLower = filters.search.toLowerCase();
        providers = providers.filter(p => 
            p.name.toLowerCase().includes(searchLower) ||
            p.service.toLowerCase().includes(searchLower) ||
            p.location.toLowerCase().includes(searchLower)
        );
    }
    
    // Filter by service type
    if (filters.service) {
        providers = providers.filter(p => p.service === filters.service);
    }
    
    // Filter by rating
    if (filters.rating) {
        const minRating = parseFloat(filters.rating);
        providers = providers.filter(p => p.rating >= minRating);
    }
    
    // Filter by price range
    if (filters.price) {
        if (filters.price === '0-500') {
            providers = providers.filter(p => p.price <= 500);
        } else if (filters.price === '500-1000') {
            providers = providers.filter(p => p.price > 500 && p.price <= 1000);
        } else if (filters.price === '1000+') {
            providers = providers.filter(p => p.price > 1000);
        }
    }
    
    return providers;
}

/**
 * Create a booking (mock)
 * @param {string} providerId - Provider ID
 * @param {string} userId - User ID
 * @returns {Object} Booking object
 */
function createBooking(providerId, userId) {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const provider = getProviderById(providerId);
    
    const booking = {
        id: Date.now().toString(),
        providerId: providerId,
        userId: userId,
        providerName: provider.name,
        service: provider.service,
        price: provider.price,
        status: 'pending',
        date: new Date().toISOString()
    };
    
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    
    return booking;
}

// Initialize mock data when the script loads
initializeMockData();