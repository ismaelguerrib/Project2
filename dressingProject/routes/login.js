const express = require("express");
const router = new express.Router();
const user = require("../models/users");

router.post("/login", (req, res, next) => {
  const theEmail = req.body.email;
  const thePassword = req.body.password;

  if (theEmail === "" || thePassword === "") {
    res.render("login", {
      errorMessage:
        "Please enter your email adress and your password to sign up"
    });
    return;
  }

  user
    .findOne({ email: theEmail })
    .then(user => {
      if (!user) {
        res.render("login", { errorMessage: "the email doesn't exist" });
        return;
      }
      if (bcrypt.compareSync(thePassword, user.password)) {
        console.log(req.session);
        req.session.currentUser = user;
        res.redirect("/");
      } else {
        res.render("login"), { errorMessage: "incorrect password" };
      }
    })
    .catch(error => {
      next(error);
    });
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
