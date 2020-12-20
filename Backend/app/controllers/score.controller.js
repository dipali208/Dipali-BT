const db = require("../models");


exports.addScore = (req, res) => {
    db.sequelize.query("insert into scoreboard(userId,quizId,score,game_date) values (?,?,?,?)",
        { replacements: [req.body.userId, req.body.quizId, req.body.score, req.body.currDate], type: db.sequelize.QueryTypes.INSERT })
        .then(data => {
            res.send(data);
            console.log(data);
        });
}



exports.addScoreGame = (req, res) => {
    db.sequelize.query("insert into scoreboard(userId,gameId,score,game_date) values (?,?,?,?)",
        {
            replacements: [req.body.userId, req.body.gameId, req.body.score, req.body.currDate],
            type: db.sequelize.QueryTypes.INSERT
        })
        .then(data => {
            res.send(data);
            console.log(data);
        });
}