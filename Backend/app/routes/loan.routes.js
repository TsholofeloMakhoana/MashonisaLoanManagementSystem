module.exports = app => {
  const loans = require("../controllers/loan.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", loans.create);

  // Retrieve all Tutorials
  router.get("/", loans.findAll);

  // Retrieve all published Tutorials
  router.get("/published", loans.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", loans.findOne);

  // Update a Tutorial with id
  router.put("/:id", loans.update);

  // Delete a Tutorial with id
  router.delete("/:id", loans.delete);

  // Delete all Tutorials
  router.delete("/", loans.deleteAll);

  app.use("/api/loans", router);
};
