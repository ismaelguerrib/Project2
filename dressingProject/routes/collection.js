const express = require("express");
const router = new express.Router();
const clothes = require("../models/clothes");
const collection = require("../models/collection");

router.post("/collection", (req, res, next) => {
  collection
    .create({ label: req.body.collection })
    .then(() => res.redirect("manage"))
    .catch(err =>
      res.render("manage", { message: "this collection already exists" })
    );
});

module.exports = router;
