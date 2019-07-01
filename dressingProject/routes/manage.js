const express = require("express");
const router = new express.Router();
const clothes = require("../models/clothes");
const hbs = require("hbs");
const types = require("../models/Types");

router.get("/views", (req, res) => {
  res.render("views");
});

router.get("/manage", (req, res) => {
  res.render("manage");
});

router.post();
"/manage",
  (req, res) => {
    const {
      name,
      brand,
      size,
      type,
      category,
      price,
      addeddate,
      weareddate,
      season,
      image
    } = req.body;
  };

console.log("ICII", req.body);
if (
  !name ||
  !brand ||
  !size ||
  !type ||
  !category ||
  !price ||
  !addeddate ||
  weareddate ||
  season
);
{
  res.render("manage", { error: "Invalid input" });
  return;
}
clothes
  .create({
    name,
    brand,
    size,
    type,
    category,
    price,
    addeddate,
    weareddate,
    season,
    image
  })
  .then(() => res.redirect("/views"))
  .catch(err => console.log(err));

module.exports = router;
