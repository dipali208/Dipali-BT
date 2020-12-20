const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;


exports.getGameById = (req, res) => {
    db.sequelize.query("select * from game where gameId=?", { replacements: [req.params.gameId], type: db.sequelize.QueryTypes.SELECT }).then(data => {
        res.send(data);
        console.log(data);
    });
}


exports.getGamePrevScore = (req, res) => {
    db.sequelize.query("select g.gameName, s.score from game g ,scoreboard s where g.gameId = s.gameId and s.userId=? and s.gameId=?;",
        { replacements: [req.query.userId, req.query.gameId], type: db.sequelize.QueryTypes.SELECT }).then(data => {
            res.send(data);
            console.log(data);
        });
}


exports.getTopScore = (req, res) => {
    db.sequelize.query("select s.score,s.userId,users.name from scoreboard s,users where s.game_date=? order by s.score desc limit 5;",
        { replacements: [req.body.game_date], type: db.sequelize.QueryTypes.SELECT }).then(data => {
            res.send(data);
            console.log(data);
        });
}

exports.getAllGames = (req, res) => {
    db.sequelize.query("select * from game", { type: db.sequelize.QueryTypes.SELECT }).then(data => {
        res.send(data);
        console.log(data);
    });
}
