module.exports = app => {
    const product = require("../controllers/product.controller.js");
    var router = require("express").Router();

    app.use('/api/products', router);
  
    // Retrieve all Products 
    router.get("/", product.findAll);
  
    // Get product with id
    router.get("/:id", product.findOne);
  
};