const express = require("express");
const clothes = require("../models/clothes");
const collecModel = require("../models/collection");
const hbs = require("hbs");
const router = new express.Router();
const Type = require("../models/collection");

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

/////// AFFICHER TRI ////
router.get("/getByTag/:id", (req, res) => {
  Promise.all([
    clothes.find({ collec: req.params.id }),
    collecModel.find()
  ]).then(idRes => {
    console.log("YEEEEEE", idRes);
    const clothesRes = idRes[0];
    const collecRes = idRes[1];
    res.render("viewall", { clothesRes, collecRes });
  });
});

module.exports = router;
