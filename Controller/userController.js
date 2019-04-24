// Required File
const url = require("url")
const express = require("express")
const User = require("../Model/userModel")

// Route
const route = express.Router()

// Register User
route.post("/" , (req , res) => {   
    User(req.body).save()
        .then(resData => res.status(200).json(resData))
        .catch(err => console.log(err))
})

// Login User
route.post("/login" , (req, res) => {
    User.findOne({email : req.body.email})
        .then(resData => {
                if(resData.type === "Designer"){res.redirect(url.format({
                    pathname : "/design",
                    query : {
                        type : resData.type
                    }
                })
                )}
                else if(resData.type === "Programmer"){
                    res.redirect(url.format({
                    pathname : "/program",
                    query : {
                        type : resData.type
                    }
                })
                )}
                else if(resData.type === "Admin"){
                    res.redirect(url.format({
                    pathname : "/admin",
                    query : {
                        type : resData.type
                    }
                })
                )}
                else{
                    res.redirect(url.format({
                        pathname : "/program",
                        query : {
                            type : resData.type
                        }
                    }))
                }
            }
        )
        .catch(err => console.log("Error! " + err))
}) 

// Exports
module.exports = route