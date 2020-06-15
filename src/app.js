require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const nunjucks = require("nunjucks");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");
const routes = require("./routes");

const app = express();
app.use(express.json({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/static", express.static(path.resolve(__dirname, "..", "static")));
app.use("/js", express.static("js"));
app.use(routes);
app.use(morgan("dev"));

nunjucks.configure(path.resolve(__dirname, "views"), {
  autoescape: true,
  express: app,
});

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(process.env.PORT, () => {
  console.log("Server up and running ");
});
