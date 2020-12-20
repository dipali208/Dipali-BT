module.exports = app => {
    const games = require("../controllers/game.controller.js");

    var router = require("express").Router();
    router.get("/byId/:gameId", games.getGameById);
    router.get("/", games.getTopScore);
    router.get("/prev", games.getGamePrevScore);
    router.get("/allGames", games.getAllGames);
    app.use('/api/game', router);
};