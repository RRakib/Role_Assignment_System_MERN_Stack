// Required File
const mongoose = require("mongoose")

// Admin's Model
const admin = mongoose.Schema({
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

// Admin's Model
const Admin = mongoose.model("admin" , admin)

// Export
module.exports = Admin