const express = require("express");
const router = express.Router();
const app = express();

/* GET sign in page */
router.get("/", (req, res, next) => {
  res.render("login");
});

router.post("/", (req, res, next) => {});

/* GET manage page */
router.get("/manage", (req, res, next) => {
  res.render("manage");
});

module.exports = router;
