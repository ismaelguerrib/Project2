const express = require("express");
const router = new express.Router();
const dayclothes = require("../models/day-clothes");

router.get("/dayclothes", (req, res, next) => {
  res.render("dayclothes", { dayclothes });
});

module.exports = router;
