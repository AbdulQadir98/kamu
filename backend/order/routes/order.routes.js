const { authJwt } = require("../middleware");
const order = require("../controllers/order.controller.js");
var router = require("express").Router();

module.exports = app => {

    app.use('/api/orders', router);
  
    // Retrieve all orders 
    // router.get("/", authJwt.verifyToken, order.findAll);
    router.get("/", order.findAll);

    // Retrieve order by id 
    // router.get("/:id", authJwt.verifyToken, order.findOne);
    router.get("/:id", order.findOne);
  
    // create an order
    router.post("/", order.create);

    // delete an order
    router.delete("/:id", order.delete);
};