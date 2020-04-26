const productsRoute = require("./products");
const defaultRoute = require("./defaultRoute/mainrouter");

const router = {
  "/products": productsRoute,
  default: defaultRoute,
};

module.exports = router;
