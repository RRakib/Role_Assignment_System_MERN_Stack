// Required File
const express = require("express")
const User = require("../Model/userModel")

// Route
const route = express.Router()

// Update Types
route.post("/" , (req, res) => {
    User.updateOne({email : req.body.emails} , {$set: {type : req.body.type}})
        .then(resData =>{
                res.json(resData)
        })
        .catch(err => console.log("Error!" + err ) )
})

// Exports
module.exports = route