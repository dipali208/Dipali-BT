const db = require("../models");

exports.prevScore = (req, res) => {
 
    db.sequelize
      .query("select q.quizName,s.score from scoreboard s,quiz q where s.userId=? and q.quizId=s.quizId and s.quizId=?", {
        replacements: [req.query.userId,req.query.quizId],
        type: db.sequelize.QueryTypes.SELECT,
      })
      .then((data) => {
        res.send(data);
        // console.log(data);
      });
  };