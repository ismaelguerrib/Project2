const express = require("express");
const clothes = require("../models/clothes");
const collecModel = require("../models/collection");
const hbs = require("hbs");
const router = new express.Router();
const Type = require("../models/collection");

//////GET/////

///////AFFICHAGE DYNAMIQUE//////////
router.get("/viewall", (req, res) => {
  Promise.all([clothes.find(), collecModel.find()])
    .then(dbRes => {
      console.log(dbRes);
      const clothesRes = dbRes[0];
      const collecRes = dbRes[1];
      res.render("viewall", { clothesRes, collecRes });
    })
    .catch(err => console.log(err));
});

module.exports = router;
