module.exports = app => {
    const quiz = require("../controllers/quiz.controller.js");
    const upload = require("../config/upload.config.js");
    var router = require("express").Router();

    router.post("/image", upload.single("uploadfile"), quiz.insertQuiz);
    router.get("/getQuizName/:catname", quiz.getQuizName);
    router.post('/addQuestion', quiz.addQuestion);
    router.get("/getCategoryName", quiz.getCategoryName);
    router.get("/getTypeName", quiz.getTypeName);
    router.get("/getQuizName", quiz.getQuizName);
    router.get("/getQuizNames", quiz.getQuizNameByName);
    router.get("/byId/:id", quiz.getQuizNameById);
    router.post("/",quiz.insert);
    app.use('/api/quiz', router);

    //router.get("/getQuizName", quiz.getQuizName);
    //router.get("/:id", quiz.getQuizNameById);
   // router.post("/",quiz.insert);
    //app.use('/api/quizz', router);

  };