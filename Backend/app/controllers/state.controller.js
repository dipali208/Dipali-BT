const db = require("../models");

exports.addState = (req, res) => {
  db.sequelize
    .query(
      "insert into state(answer,userId,questionId,quizId,reamainingTime) values (?,?,?,?,?)",
      {
        replacements: [
          req.body.answer,
          req.body.userId,
          req.body.questionId,
          req.body.quizId,
          req.body.reamainingTime,
        ],
        type: db.sequelize.QueryTypes.INSERT,
      }
    )
    .then((data) => {
      res.send(data);
      console.log(data);
    });
};

exports.deleteState = (req, res) => {
  console.log(req.body, "vfdjkvn");
  db.sequelize
    .query("delete from state where userId=?", {
      replacements: [req.params.userId],
      type: db.sequelize.QueryTypes.DELETE,
    })
    .then((data) => {
      res.send(data);
      // console.log(data);
    });
};

exports.getState = (req, res) => {
  console.log(req.body, "vfdjkvn");
  db.sequelize
    .query("select * from state where userId=?", {
      replacements: [req.params.userId],
      type: db.sequelize.QueryTypes.SELECT,
    })
    .then((data) => {
      res.send(data);
      // console.log(data);
    });
};

exports.updateTime = (req, res) => {
  db.sequelize
    .query("update state set reamainingTime=? where userId=? and quizId=?", {
      replacements: [req.body.reamainingTime, req.body.userId, req.body.quizId],
      type: db.sequelize.QueryTypes.UPDATE,
    })
    .then((data) => {
      res.send(data);
      // console.log(data);
    });
};

exports.getTime = (req, res) => {
  db.sequelize
    .query("select reamainingTime from state where userId=?", {
      replacements: [req.params.userId],
      type: db.sequelize.QueryTypes.SELECT,
    })
    .then((data) => {
      res.send(data);
      // console.log(data);
    });
};
