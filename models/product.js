const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    title: {
        required:true,
        type:String,
        unique:1,
        maxlength:100
    },

    description: {
        required:true,
        type:String,
        maxlength:100000
    },

    images: {
        type:Array,
        default:[]
    },

    category: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required:true
    }
}, {timestamps: true});

const Product = mongoose.model("Product", productSchema);
module.exports = { Product }