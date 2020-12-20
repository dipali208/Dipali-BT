const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const cors = require('cors')
global.__basedir = __dirname;
app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

const db = require("./app/models");
db.sequelize.sync();
require("./app/routes/question.route")(app);
require("./app/routes/quiz.route")(app);
require("./app/routes/user.route")(app);
require("./app/routes/favourite.route")(app);
require("./app/routes/category.route")(app);
require("./app/routes/feedback.route")(app);
require("./app/routes/questionarie.route")(app);
require("./app/routes/state.route")(app);
require("./app/routes/displayQuiz.route")(app);
require("./app/routes/verifyAnswer.route")(app);
require("./app/routes/score.route")(app);
require("./app/routes/prevScore.route")(app);
require("./app/routes/game.route")(app);
require("./app/routes/admin.route")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is running on port ${PORT}.");
});