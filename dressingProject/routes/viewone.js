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

router.get("/edit/:id", (req, res) => {
  cloth
    .findById(req.params.id)
    .then(updateClothe => res.render("manage", { updateClothe }))
    .catch(err => console.log(err));
});

router.post("/manage", (req, res) => {
  // const {
  //   name,
  //   brand,
  //   size,
  //   type,
  //   price,
  //   addeddate,
  //   season,
  //   collec
  // } = req.body;
  clothe
    .updateOne(
      { _id: req.params.id },
      {
        name,
        brand,
        size,
        type,
        price,
        addeddate,
        season,
        collec,
        image
      }
    )
    .then(() => res.redirect("/viewall"))
    .catch(err => console.log(err));
});

module.exports = router;
