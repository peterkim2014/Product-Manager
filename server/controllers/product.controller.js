const Product = require("../models/product.model");

module.exports = {
    // CREATE
    createProduct: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.json(err))
    },

    // READ ALL
    getAllProducts: (req, res) => {
        Product.find()
            .then(allProducts => res.json(allProducts))
            .catch(err => res.json(err))
    },

    // READ ONE
    getOneProduct: (req, res) => {
        Product.findById({_id: req.params.id})
            .then(oneProduct => res.json(oneProduct))
            .catch(err => res.json(err))
    },

    // UPDATE ONE
    updateProduct: (req, res) => {
        Product.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then(updatedProduct => res.json(updatedProduct))
            .catch(err => console.log(err))
    },

    // DELETE ONE
    deleteProduct: (req, res) => {
        Product.findByIdAndDelete({_id: req.params.id})
            .then(deleteProduct => res.json(deleteProduct))
            .catch(err => console.log(err))
    }

}