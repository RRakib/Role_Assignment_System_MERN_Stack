// Required File
const mongoose = require("mongoose")

// User's Model
const user = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    type : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

// User's Model
const User = mongoose.model("user" , user)

// Export
module.exports = User