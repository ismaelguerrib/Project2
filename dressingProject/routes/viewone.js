const express = require("express");
const router = new express.Router();
const cloth = require("../models/clothes");

router.get("/viewone/:id", (req, res, next) => {
  cloth
    .findById(req.params.id)
    .then(wear => res.render("viewone", wear))
    .catch();
});

router.get("/delete/:id", (req, res) => {
  cloth
    .findByIdAndDelete(req.params.id)
    .then(() => res.redirect("/viewall").catch(err => console.log(err)));
});

module.exports = router;
