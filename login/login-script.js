function submitForm() {
    // Get the values from the email and password fields
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Validate the email field
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // Validate the password field
    if (password.length < 8) {
      alert("Password must be at least 8 characters long.");
      return;
    }
  
    // If the form data is valid, submit the form to the server
    // ...
    // Create an XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // Set the request method and URL
  xhr.open("POST", "/submit-form");

  // Set the request headers
  xhr.setRequestHeader("Content-Type", "application/json");

  // Set the request body
  const requestBody = JSON.stringify({ email, password });
  xhr.send(requestBody);
  
  // Handle the response from the server
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        // Handle a successful response from the server
        console.log(xhr.responseText);
      } else {
        // Handle an error response from the server
        console.error(xhr.statusText);
      }
    }
  };

  // Prevent the default form submission behavior
  event.preventDefault();
}
  