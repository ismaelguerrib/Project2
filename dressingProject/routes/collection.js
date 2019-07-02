const express = require("express");
const router = new express.Router();
const clothes = require("../models/clothes");
const collection = require("../models/collection");

router.post("/collection", (req, res, next) => {
  collection
    .create({ label: req.body.collection })
    .then(() => res.redirect("/viewall"))
    .catch(err => res.redirect("/manage"));
});

module.exports = router;
