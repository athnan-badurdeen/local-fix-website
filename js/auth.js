// Authentication Functions

/**
 * Register a new user
 * @param {Object} userData - User registration data
 * @returns {Object} Success/error response
 */
function registerUser(userData) {
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if email already exists
    const emailExists = users.some(user => user.email.toLowerCase() === userData.email.toLowerCase());
    if (emailExists) {
        return {
            success: false,
            message: 'Email already registered. Please login.'
        };
    }

    // Create new user object
    const newUser = {
        id: Date.now().toString(),
        name: userData.name,
        email: userData.email.toLowerCase().trim(), // Normalize email
        phone: userData.phone.trim(),
        location: userData.location,
        password: userData.password, // In real app, this should be hashed
        role: userData.role,
        serviceType: userData.serviceType || null,
        createdAt: new Date().toISOString()
    };

    // Add user to array and save
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Log for debugging
    console.log('User registered successfully:', newUser.email);
    console.log('Total users:', users.length);

    return {
        success: true,
        message: 'Registration successful!',
        user: newUser
    };
}

/**
 * Login user
 * @param {string} emailOrPhone - Email or phone
 * @param {string} password - Password
 * @returns {Object} Success/error response with user data
 */
function loginUser(emailOrPhone, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Normalize input
    const normalizedInput = emailOrPhone.toLowerCase().trim();
    const normalizedPassword = password.trim();

    // Log for debugging
    console.log('Login attempt for:', normalizedInput);
    console.log('Total users in system:', users.length);

    // Find user by email or phone
    const user = users.find(u => {
        const emailMatch = u.email.toLowerCase() === normalizedInput;
        const phoneMatch = u.phone === emailOrPhone.trim();
        const passwordMatch = u.password === normalizedPassword;

        return (emailMatch || phoneMatch) && passwordMatch;
    });

    if (!user) {
        console.log('Login failed: User not found or password incorrect');
        return {
            success: false,
            message: 'Invalid email/phone or password'
        };
    }

    // Set current user in session
    localStorage.setItem('currentUser', JSON.stringify(user));
    console.log('Login successful for:', user.email);

    return {
        success: true,
        message: 'Login successful!',
        user: user
    };
}

/**
 * Logout current user
 */
function logoutUser() {
    localStorage.removeItem('currentUser');
    console.log('User logged out');
}

/**
 * Get currently logged in user
 * @returns {Object|null} Current user or null
 */
function getCurrentUser() {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
}

/**
 * Check if user is authenticated
 * @returns {boolean} True if authenticated
 */
function isAuthenticated() {
    return getCurrentUser() !== null;
}

/**
 * Check if user has specific role
 * @param {string} role - Role to check (buyer/seller)
 * @returns {boolean} True if user has the role
 */
function hasRole(role) {
    const user = getCurrentUser();
    return user && user.role === role;
}

/**
 * Debug function to view all users (for testing only)
 */
function viewAllUsers() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    console.table(users.map(u => ({
        email: u.email,
        name: u.name,
        role: u.role,
        password: u.password
    })));
}

/**
 * Clear all user data (for testing only)
 */
function clearAllUsers() {
    localStorage.removeItem('users');
    localStorage.removeItem('currentUser');
    console.log('All user data cleared');
}