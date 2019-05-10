const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name: {
        required:true,
        type:String,
        unique:1,
        maxlength:100
    }
});

const Book = mongoose.model("Book", bookSchema);
module.exports = { Book }