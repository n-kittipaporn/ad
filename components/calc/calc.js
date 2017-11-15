// If this returns true, the user is logged in
function authenticateToken() {
    if (adalInstance.getCachedUser()) {
        // If we have a cached login, use it
        return true
    }

    if (adalInstance.isCallback(window.location.hash)) {
        // This happens after the AD login screen,
        // handleWindowCallback will use the hash to
        // complete the login
        adalInstance.handleWindowCallback()
        return true
    }

    // Not logged in
    return false
}

if (authenticateToken()) {
    // User is logged in
}
else {
    // Not logged in, go to 401 page?
    window.location.pathname = '/401.html'
}