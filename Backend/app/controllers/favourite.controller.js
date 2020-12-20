const db = require("../models");


exports.insert=(req,res)=>{
    console.log(req.body,"body data");
    
  db.sequelize.query("insert into favourite (userId,questionId,gameId) values(?,?,?)",
  {replacements: [ req.body.userId,req.body.questionId,req.body.gameId],type: db.sequelize.QueryTypes.INSERT }).then(data=>{
      res.send(data);
      console.log(data);
      
    });
}

exports.delete=(req,res)=>{
    console.log(req.body,"vfdjkvn");
    db.sequelize.query("delete from favourite where questionId=?",
    {replacements: [req.params.questionId],type: db.sequelize.QueryTypes.DELETE }).then(data=>{
        res.send(data);
       // console.log(data);
      });
  }

  exports.getList=(req,res)=>{
    console.log(req.params);
    db.sequelize.query("select f.favouriteId,q.quizName from favourite f inner join quiz q on q.quizId=f.questionId where f.userId=?",
    {replacements: [req.params.userId],type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       // console.log(data);
      });
  }

  exports.deleteItem=(req,res)=>{
    console.log(req.body,"vfdjkvn");
    db.sequelize.query("delete from favourite where favouriteId=?",
    {replacements: [req.params.id],type: db.sequelize.QueryTypes.DELETE }).then(data=>{
        res.send(data);
       // console.log(data);
      });
  }

