const express = require("express");
const router = new express.Router();
const clothes = require("../models/clothes");
const collectionName = require("../models/collection");
const hbs = require("hbs");
const uploadCloud = require("../config/cloudinary");

router.get("/manage", (req, res) => {
  console.log("YOYOYOYOYOO");
  collectionName
    .find()
    .then(dbRes => {
      console.log(dbRes);
      res.render("manage", { dbRes });
    })
    .catch(err => console.log(err));
});

router.post("/manage", uploadCloud.single("image"), (req, res) => {
  const {
    name,
    brand,
    size,
    type,
    price,
    addeddate,
    weareddate,
    season,
    collec
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
      name,
      brand,
      size,
      type,
      price,
      addeddate,
      weareddate,
      season,
      collec,
      image: imgPath
    })
    .then(dbRes => res.redirect("/viewall"))
    .catch(err => console.log(err));
});

module.exports = router;
