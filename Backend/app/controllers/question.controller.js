const db = require("../models");
exports.addQuestion = (req, res) => {
  db.sequelize
    .query(
      "insert into questionarie(question,option1,option2,option3,option4,answer,quizId,categoryId,typeId) values (?,?,?,?,?,?,(select quizId from quiz where quizName=?),(select categoryId from categories where categoryName=?),(select typeId from questionType where typeName=?))",
      {
        replacements: [
          req.body.question,
          req.body.option1,
          req.body.option2,
          req.body.option3,
          req.body.option4,
          req.body.answer,
          req.body.quizName,
          req.body.categoryName,
          req.body.typeName,
        ],
        type: db.sequelize.QueryTypes.INSERT,
      }
    )
    .then((data) => {
      res.send(data);
      console.log(data);
    });
};

exports.getQuizName = (req, res) => {
  db.sequelize
    .query("select DISTINCT(quizName),duration from quiz", {
      type: db.sequelize.QueryTypes.SELECT,
    })
    .then((data) => {
      res.send(data);
      console.log(data);
    });
};

exports.getCategoryName = (req, res) => {
  db.sequelize
    .query("select * from categories", { type: db.sequelize.QueryTypes.SELECT })
    .then((data) => {
      res.send(data);
      console.log(data);
    });
};

exports.getTypeName = (req, res) => {
  db.sequelize
    .query("select * from questionType", {
      type: db.sequelize.QueryTypes.SELECT,
    })
    .then((data) => {
      res.send(data);
      console.log(data);
    });
};

exports.getDuration = (req, res) => {
    db.sequelize
      .query("select duration from quiz where quizId = ?",{replacements: [
        req.params.quizId,
      ], 
        type: db.sequelize.QueryTypes.SELECT,
      })
      .then((data) => {
        res.send(data);
        console.log(data);
      });
  };