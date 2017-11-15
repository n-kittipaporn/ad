var adalInstance = new AuthenticationContext({
    instance: 'https://login.microsoftonline.com/',
    
    // The client ID of the app from the Azure Portal
    clientId: '28ee2b74-ad95-4256-9656-406c2d49b41d',
    
    // Where do we want to go after logging out
    postLogoutRedirectUri: window.location.origin, 
    
    endpoints: {
      // The domain of API (requsets are made TO)
      // And the same client id as above
      "https://nantiya-dev-main-wap.azurewebsites.net/": "28ee2b74-ad95-4256-9656-406c2d49b41d"       
    }
  })