const mainRoute = require("./defaultRoute/mainrouter");
const products = require("./products/products");
const signUp = require("./signUp/user");

const router = {
  "/signUp": signUp,
  "/products": products,
  default: mainRoute
};

module.exports = router;
