// Required File
const express = require("express")
const User = require("../Model/userModel")

// Route
const route = express.Router()

// Authenticate
let authenticate = ((req, res, next) => {
    if(req.query.type != "Admin"){
        res.json({"warning" : "You are not authorized. Please ask admin to assign you a role"})
    }
    else{
        next()
    }
})

// Get To Design
route.get("/" , authenticate, (req, res) => {
    User.find({type : null})
        .then(resData =>{
                res.json({"welcome" : "Welcome Admin" , "emails" : resData , "admin" : true})
        })
        .catch(err => console.log("Error!" + err ) )
})

// Exports
module.exports = route