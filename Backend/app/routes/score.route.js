module.exports = app => {
    const score = require("../controllers/score.controller.js");

    var router = require("express").Router();
    router.post("/", score.addScore);
    router.post("/game", score.addScoreGame);
    app.use('/api/score', router);
};
