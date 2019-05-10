const express = require('express');
const app = express();

const routes = require("./routes");
app.use(routes);

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
  

  


const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
    console.log(`Server running at PORT ${PORT}`);
});
