const ProductController = require("../controllers/product.controller");

module.exports = app => {
    app.post("/api/product/create", ProductController.createProduct);
    app.get("/api/product", ProductController.getAllProducts);
    app.get("/api/product/:id", ProductController.getOneProduct);
    app.patch("/api/product/:id", ProductController.updateProduct);
    app.delete("/api/product/:id", ProductController.deleteProduct);
}