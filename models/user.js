const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const SALT_I = 10;
require('dotenv').config();

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: 1
    },

    password: {
        type: String,
        required: true,
        minlength: 8
    },

    name: {
        type: String,
        required: true,
        maxlength: 100
    },

    lastname: {
        type: String,
        required: true,
        maxlength: 100
    },

    role: {
        type: Number,
        default: 0
    },

    token: {
        type: String
    }
});

//Before we save our new User...we want to hash the password
userSchema.pre('save', function (next) {
    // References the userSchema, not the function
    var user = this;

    //If User modifies password then encrypt password
    if (user.isModified('password')) {
        bcrypt.genSalt(SALT_I, function (err, salt) {
            // next kills whatever this entire line from 45 to 47 is doing and moves forward to the next command, which is working with saving outputting user response
            if (err) return next(err)

            //hash uses the password of the hash(user.password)
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);
                //users password (not the string) is equal to the hash
                user.password = hash;
                next();
            });
        });
    } else {
        next()
    }
});

userSchema.methods.compareuserPassword = function (nonhashPassword, cb) {
    //Take the nonhashpassword and pass data of the user
    bcrypt.compare(nonhashPassword, this.password, function (err, passwordCheck) {
        if (err) return cb(err);
        //Password matches you get a response of null and passes passwordCheck
        cb(null, passwordCheck);
    })
}

userSchema.methods.generateToken = function (cb) {
    var user = this;
    //Generate a token with a user id + password
    var token = jwt.sign(user._id.toHexString(), process.env.SECRET)
    user.token = token;
    user.save(function(err, user) {
        if(err) return cb (err);
        cb(null, user);
    });
}

userSchema.statics.findByToken = function(token, cb) {
    var user = this;
    //Verify whether this is the correct token for that user id
    jwt.verify(token, process.env.SECRET, function(err, decode) {
        user.findOne({"_id": decode,"token": token} , function(err, user) {
            if(err) return cb(err);
            cb(null, user);
        });
    })
}

const User = mongoose.model('User', userSchema);
module.exports = {
    User
}