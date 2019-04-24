// Required File
const express = require("express")

// Route
const route = express.Router()

// Authenticate
let authenticate = ((req, res, next) => {
    if(req.query.type != "Programmer"){
        res.json({"warning" : "You are not authorized. Please ask admin to assign you a role"})
    }
    else{
        next()
    }
})

// Get To Design
route.get("/" , authenticate, (req, res) => {
    console.log(req.query);
    res.json({"welcome" : "Welcome Mr.Programmer"})
})

// Exports
module.exports = route