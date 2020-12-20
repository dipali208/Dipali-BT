module.exports = app => {
    const user = require("../controllers/user.controller.js");
    
    var router = require("express").Router();
    router.get("/:userId",user.getUserById)
    router.post("/", user.insert);
    router.get("/", user.getUserData);
    app.use('/api/user', router);
  };