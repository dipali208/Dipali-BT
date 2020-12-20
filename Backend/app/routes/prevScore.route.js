module.exports = (app) => {
  const score = require("../controllers/prevScore.controller.js");

  var router = require("express").Router();
  router.get("/", score.prevScore);
  app.use("/api/prevScore", router);
};
