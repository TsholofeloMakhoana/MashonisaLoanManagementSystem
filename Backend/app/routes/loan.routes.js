module.exports = app => {
  const loans = require("../controllers/loan.controller.js");

  var router = require("express").Router();


  router.post("/", loans.create);
  router.get("/", loans.findAll);

  
  router.get("/approved/", loans.findAllApprovedLoans);
  router.get("/pending/", loans.findAllPendingLoans);
  router.get("/rejected/", loans.findAllRejectedLoans);


  router.get("/:id", loans.findOne);


  router.put("/:id", loans.update);
  router.delete("/:id", loans.delete);
  router.delete("/", loans.deleteAll);

  app.use("/api/loans", router);
};
