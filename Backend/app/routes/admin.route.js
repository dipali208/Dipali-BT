module.exports = app => {
    const admin = require("../controllers/admin.controller.js");
    
    var router = require("express").Router();
  
    router.get("/getUsersForQuiz", admin.getUsersForQuiz);
    router.put("/updateClickCount",admin.updateClickCount);
    router.get("/getClickCount/:quizId",admin.getClickCount);
    router.get("/getTopScorers",admin.getTopScorers);
    app.use('/api/admin', router);
};
