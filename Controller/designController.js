// Required File
const express = require("express")

// Route
const route = express.Router()

// Authenticate
let authenticate = ((req, res, next) => {
    if(req.query.type != "Designer"){
        res.json({"warning" : "You are not authorized. Please ask admin to assign you a role"})
        res.redirect("/login")
    }
    else{
        next()
    }
})

// Get To Design
route.get("/" , authenticate, (req, res) => {
    console.log(req.query);
    res.json({"welcome" : "Welcome Mr.Designer"})
})

// Exports
module.exports = route