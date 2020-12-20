module.exports = app => {
    const cat = require("../controllers/category.controller.js");
    const upload = require("../config/upload.config.js");
    var router = require("express").Router();
    //router.post("/", cat.insert);
    router.get("/",cat.getCategoryName);
    router.post("/", upload.single("uploadfile"), cat.insertCategory);
    app.use('/api/cat', router);
  };