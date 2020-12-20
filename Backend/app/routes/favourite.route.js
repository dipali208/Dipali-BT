module.exports = app => {
    const fav = require("../controllers/favourite.controller.js");
    
    var router = require("express").Router();
    router.post("/", fav.insert);
    router.delete("/remove/:questionId", fav.delete);
    router.get("/:userId",fav.getList);
    router.delete("/:id",fav.deleteItem);
    app.use('/api/fav', router);
  };