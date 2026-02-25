const express = require("express");

const app = express();
const urlroute = require("./routes/urlroutes");
app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(urlroute);

app.listen(3000, () => {
  console.log("server is running  on http://localhost:3000");
});
