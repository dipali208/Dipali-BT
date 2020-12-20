const db = require("../models");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

exports.getUsersForQuiz = (req,res)=>{
    db.sequelize.query("select q.quizName,u.name from quiz q,users u where q.userId=u.userId and q.quiz_date=(select DATE_FORMAT(now(),'%y-%m-%d')) ",{ type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }

  exports.getTopScorers = (req,res)=>{
    db.sequelize.query("select u.name,q.quizName,s.score from users u,scoreboard s,quiz q where s.userId=u.userId and q.quizId=s.quizId and q.quiz_date=(select DATE_FORMAT(now(),'%y-%m-%d')) order by s.score desc limit 5",{ type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }

  exports.updateClickCount = (req,res)=>{
    db.sequelize.query("update quiz set click_count=? where quizId=?",{replacements: [req.body.click_count,req.body.quizId],type: db.sequelize.QueryTypes.PUT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }
  exports.getClickCount = (req,res)=>{
    db.sequelize.query("select click_count,quizName from quiz where quizId=?",{ replacements: [req.params.quizId],type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }