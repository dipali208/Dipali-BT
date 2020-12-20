module.exports = (app) => {
    const state = require("../controllers/state.controller.js");
  
    var router = require("express").Router();
    router.post("/", state.addState);
    router.delete("/:userId", state.deleteState);
    router.get("/:userId", state.getState);
    router.put("/", state.updateTime);
    router.get("/gettimer/:userId", state.getTime);
    app.use("/api/state", router);
  };
  

