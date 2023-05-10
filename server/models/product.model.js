const { ObjectId } = require("bson");
const mongoose = require('mongoose');
 
const ProductSchema = new mongoose.Schema({
    id: { type: ObjectId },
    title: { 
        type: String,
        required: [true, "Title is required"],
        minlength: [1, "Title must be filled"],
        maxlength: [50, "Title cannot be more than 50 characters long"]
    },
    price: { 
        type: Number,
        required: [true, "Price is required"],
        minlength: [1, "Price must be filled"],
        maxlength: [50, "Price cannot be more than 50 characters long"]
    },
    description: { 
        type: String,
        required: [true, "Description is required"],
        minlength: [1, "Description must be filled"],
        maxlength: [50, "Description cannot be more than 50 characters long"]
    }
}, { timestamps: true });
 
const Product = mongoose.model('Product', ProductSchema);
 
module.exports = Product;