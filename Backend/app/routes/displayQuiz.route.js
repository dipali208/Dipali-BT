module.exports = app => {
    const quiz = require("../controllers/displayQuiz.controller.js");
    
    var router = require("express").Router();
    router.get("/getByCategory/:id", quiz.getByCategory);
    //router.get("/getByQuiz/:id", quiz.getByQuiz);
    router.get("/getQuestionarie", quiz.getQuestionarie);
    router.get("/getByQuizCategory/:id", quiz.getByQuizCategory);
    app.use('/api/displayQuiz', router);
};

