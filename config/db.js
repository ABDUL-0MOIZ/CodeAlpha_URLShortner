const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/urlshortn")
  .then(() => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.error("Error connecting to database:", err);
  });

module.exports = mongoose;
