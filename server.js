// Required Files
const express = require("express");

// Middleware
const app = express();

// Port
const port = process.env.PORT || 5000;

// Listening To Port
app.listen(port , () => {
    console.log("Listening to port 5000")
}) 