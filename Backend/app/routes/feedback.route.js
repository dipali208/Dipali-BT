module.exports = app => {
    const feedback = require("../controllers/feedback.controller.js");
    var router = require("express").Router();
    router.post("/", feedback.insert);
    router.delete("/:userId", feedback.delete);
    app.use('/api/feedback', router);
  };