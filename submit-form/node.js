const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// Middleware to parse request body as JSON
app.use(bodyParser.json());

// Route to handle login requests
app.post("/login", (req, res) => {
  // Get the email and password from the request body
  const { email, password } = req.body;

  // Validate the email and password against a database
  if (email === "giwon.nam@gmail.com" && password === "1234") {
    // If the email and password are valid, send a success response
    res.status(200).send("Login successful");
  } else {
    // If the email and password are invalid, send an error response
    res.status(401).send("Invalid email or password");
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
