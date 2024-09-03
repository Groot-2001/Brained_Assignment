const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoute = require("./api/product_api.js");
require("dotenv").config();
const dbconn = require("./db");

//creating express application
const app = express();

//setting up with Port
const PORT = process.env.PORT || 3001;

app.use(morgan("tiny"));

//Setting up with helmet
app.use(helmet.hidePoweredBy());
app.use(helmet.frameguard({ action: "deny" }));
app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());

//database connection
dbconn();

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

//exposing the /uploads route for frontend image fetching.
app.use("/uploads", express.static("uploads"));

// handling cors errors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers: Content-Type, Custom-Header"
  );
  next();
});

//Api Endpoints looks like

//https://localhost:3001/api/products
app.use("/api", productRoute);

//handling 404 error
app.use("*", (req, res, next) => {
  console.error(req.path);
  console.error(req.params);
  res
    .status(404)
    .json("404,Sorry we couldn't find that page");
  next();
});

// body parser error catcher
app.use((err, req, res, next) => {
  if (err) {
    console.error(err.type);
    res
      .status(400)
      .json({ error: "error parsing data", err });
  } else {
    next();
  }
});

//running listen event on server app
app.listen(PORT, () => {
  console.log(`Running on ${PORT}`);
});
