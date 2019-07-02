const express = require("express");
const router = new express.Router();
const clothes = require("../models/clothes");
const hbs = require("hbs");
const uploadCloud = require("../config/cloudinary");

router.get("/manage", (req, res) => {
  res.render("manage");
});

router.post("/manage", uploadCloud.single("photo"), (req, res) => {
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
  const imgPath = req.file.url;
  const imgName = req.file.orginalName;
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
      imgPath,
      imgName,
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
    .then(() => res.redirect("/viewall"))
    .catch(err => console.log(err));
});

module.exports = router;
