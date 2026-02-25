const express = require("express");
const {
  homecontroller,
  shortnerurl,
  goalurl,
} = require("../controllers/urlcontroller");
const urlroute = express.Router();
urlroute.get("/", homecontroller);
urlroute.post("/shorten", shortnerurl);
urlroute.get("/:shortUrl", goalurl);
module.exports = urlroute;
