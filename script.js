function onSignIn(googleUser) {
    // Get the user's ID token and send it to your server for verification
    var id_token = googleUser.getAuthResponse().id_token;
    // Send the token to your server
    // ...
  }
  
  function submitForm() {
    // Handle the form submission
    // ...
  }
  