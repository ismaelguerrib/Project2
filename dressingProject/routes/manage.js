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
    size,
    type,
    category,
    price,
    addeddate,
    weareddate,
    season
  } = req.body;
  console.log("ICII", req.body);
  // if (
  //   !name ||
  //   !brand ||
  //   !size ||
  //   !type ||
  //   !category ||
  //   !price ||
  //   !addeddate ||
  //   weareddate ||
  //   season
  // ) {
  //   res.render("manage", { error: "Invalid input" });
  //   return;
  // }
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
      season
    })
    .then(() => res.redirect("/views"))
    .catch(err => console.log(err));
});

module.exports = router;
