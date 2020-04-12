const express = require("express");
const products = require("./products/getProduct");
const notExist = require("./routeIsNotExist");
const createOrders = require("./orders/createOrders.js");
const { getUser, createUser } = require("./user");
const router = express.Router();

router
  .get("/products/:id", products)
  .post("/users", createUser)
  .get("/users/:id", getUser)
  .post("/orders/", createOrders)
  .get("*", notExist);

module.exports = router;
