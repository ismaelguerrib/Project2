const express = require("express");
const clothes = require("../models/clothes");
const hbs = require("hbs");
const router = new express.Router();
const Type = require("../models/Types");

//////GET/////

///////AFFICHAGE DYNAMIQUE//////////
router.get("/viewall", (req, res) => {
  clothes
    .find()
    .then(dbRes => res.render("viewall", { clothes: dbRes }))
    .catch(err => console.log(err));
});

module.exports = router;
