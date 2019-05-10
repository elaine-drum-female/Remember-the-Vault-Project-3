const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    email: {
        type:String,
        required:true,
        unique:1
    },

    password: {
        type:String,
        required:true,
        minlength:8
    },

    name: {
        type:String,
        required:true,
        maxlength:100
    },

    lastname: {
        type:String,
        required:true,
        maxlength:100
    },

    role: {
        type:Number,
        default:0
    },

    token: {
        type:String
    }
})

const User = mongoose.model('User', userSchema);
module.exports = {User}