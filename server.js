const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const cookieParser= require('cookie-parser');
app.use(cookieParser());

const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Remember-the-Vault-Project-3");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

//Models
const {User} = require('./models/user');

//Middleware
const { auth } = require ('./middleware/auth'); 

//======================================
//               USERS
//======================================

//This goes to auth after receiving a request and response
app.get('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    isAdmin: req.user.role === 0 ? false: true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role
  });
});

//USERS this is correlated with user model
app.post('/api/users/register', (req, res) => {
  const user = new User(req.body);

  user.save((err, doc) => {
    if(err) return res.json({success:false, err});
    res.status(200).json({
      success:true,
      //userData:doc
    });
  });
});

app.post('/api/users/login', (req, res) => {
  // Use the 'User' from models to find the email to see if user has registered or not
    User.findOne({'email':req.body.email}, (err, user) => {
      //If there is no user in the database then send a message Email not found
      if(!user) return res.json({loginSuccess: false, message: "Email not found"});
      // IF the user is in the database, grab password and check password
      user.compareuserPassword(req.body.password, (err, passwordCheck) => {
        // IF the password is wrong send a message saying Wrong password!
        if(!passwordCheck) return res.json({loginSuccess: false, message: "Wrong password!"});
        // Generate a token
        user.generateToken((err, user)=> {
          if(err) return res.status(400).send(err);
          res.cookie('x_auth', user.token).status(200).json({
            loginSuccess:true
          })
        });
      });
    });

});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
});
