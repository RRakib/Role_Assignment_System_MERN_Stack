// Required Files
const express = require("express")
const key = require("./config/key")
const mongoose = require("mongoose")

// Connect To MongoDB Atlas
mongoose.connect(key.mongoURI , {useNewUrlParser : true})
    .then(res => console.log("Connected To MongoDB"))
    .catch(err => console.log("Error!! " + err))
    
// Middleware
const app = express();
app.use(express.urlencoded({extended : false}))
app.use(express.json())

// Port
const port = process.env.PORT || 5000;

// Listening To Port
app.listen(port , () => {
    console.log("Listening to port 5000")
}) 