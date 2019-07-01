const express = require("express");
const router = new express.Router();
const clothes = require("../models/clothes");
const hbs = require("hbs");

router.get("/manage", (req, res) => {
  res.render("manage");
});

router.post("/manage", (req, res) => {
  const {
    name,
    brand,
    type,
    category,
    price,
    addeddate,
    weareddate,
    season
  } = req.body;
  if (
    !name ||
    !brand ||
    !type ||
    !category ||
    !price ||
    !addeddate ||
    weareddate ||
    season
  ) {
    res.render("manage", { error: "Invalid input" });
    return;
  }
  Product.create({
    name,
    brand,
    type,
    category,
    price,
    addeddate,
    weareddate,
    season
  })
    .then(() => res.redirect("/views"))
    .catch(err => console.log(err));
});
