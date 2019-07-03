const express = require("express");
const router = new express.Router();
const cloth = require("../models/clothes");

function searchFunction() {
  var input, filter, ul, li, a, i;
  input = cloth.getElementById("myinput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("wrapper");
  li = ul.getElementsByTagName("p");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("p")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

module.exports = router;
