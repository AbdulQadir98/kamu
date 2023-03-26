module.exports = app => {
    const user = require("../controllers/user.controller.js");
    var router = require("express").Router();

    app.use('/api/user', router);
  
    // Retrieve all Users 
    router.get("/", user.findAll);

    // Create a new user
    router.post("/", user.create);
  
    // Update a user with id
    router.put("/:id", user.update);
  
    // Delete a user with id
    router.delete("/:id", user.delete);
  
  };