const { ObjectId } = require("bson");
const mongoose = require('mongoose');
 
const ProductSchema = new mongoose.Schema({
    id: { type: ObjectId },
    title: { 
        type: String,
        required: [true, "Title is required"],
        minlength: [0, "Title must be filled"],
        maxlength: [100, "Title cannot be more than 50 characters long"]
    },
    price: { 
        type: Number,
        required: [true, "Price is required"]
    },
    description: { 
        type: String,
        required: [true, "Description is required"],
        minlength: [0, "Description must be filled"],
        maxlength: [100, "Description cannot be more than 50 characters long"]
    }
}, { timestamps: true });
 
const Product = mongoose.model('Product', ProductSchema);
 
module.exports = Product;