const db = require("../models");
const fs = require("fs");

exports.insert=(req,res)=>{
    console.log(req.body,"body data");
    
  db.sequelize.query("insert into categories (categoryName) values(?)",
  {replacements: [ req.body.categoryName],type: db.sequelize.QueryTypes.INSERT }).then(data=>{
      res.send(data);
      console.log(data);
      
    });
}

  exports.getCategoryName = (req,res)=>{
    db.sequelize.query("select * from categories",{type: db.sequelize.QueryTypes.SELECT }).then(data=>{
        res.send(data);
       console.log(data);
      });
  }

  const Image = db.categories;

// Upload a Multipart-File then saving it to MySQL database
exports.insertCategory = (req, res) => {
  Image.create({
    type: req.file.mimetype,
    name: req.file.originalname,
    data: fs.readFileSync("/home/dipali/Downloads/DB-UI-main/Frontend/src/" + "assets/" + req.file.filename),
    categoryName: req.body.categoryName,
    description: req.body.description,
  }).then((image) => {
    try {
      fs.writeFileSync("/home/dipali/Downloads/DB-UI-main/Frontend/src/" + "assets/" + image.name, image.data);

      // exit node.js app
      res.json({ msg: "File uploaded successfully!", file: req.file });
    } catch (e) {
      console.log(e);
      res.json({ err: e });
    }
  });
};

