const express = require("express");
const router = new express.Router();
const clothes = require("../models/clothes");
const hbs = require("hbs");

router.get("/manage", (req, res) => {
  res.render("manage");
});
