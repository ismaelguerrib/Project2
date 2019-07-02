const express = require("express");
const router = new express.Router();
var clothes = require("../models/clothes");

router.get("/dashboard", (req, res, next) => {
  clothes
    .find()
    .then(resultat => res.render("dashboard", console.log(resultat)))
    .catch();
});

module.exports = router;
