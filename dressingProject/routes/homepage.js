const express = require("express");
const router = new express.Router();

router.get("/homepage", (req, res, next) => {
  res.render("homepage");
});

module.exports = router;
