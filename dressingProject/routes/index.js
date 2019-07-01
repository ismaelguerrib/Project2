const express = require("express");
const router = express.Router();
const app = express();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("homepage");
});

/* GET manage page */
router.get("/manage", (req, res, next) => {
  res.render("manage");
});

module.exports = router;
