const fs = require("fs");
const path = require("path");
const productPath = path.join(
  __dirname,
  "../../",
  "db",
  "products",
  "all-products.json"
);

const getProducts = (req, res) => {
  const answer = {
    status: "",
    product: [],
  };
  const ids = req.params.id;
  fs.readFile(productPath, "utf8", (err, data) => {
    if (err) throw err;
    const arr = JSON.parse(data);
    const filtered = arr.filter((item) => ids.includes(item.id));

    if (filtered.length > 0) {
      answer.product = filtered;
      answer.status = "Product successfully found";
      res.send(answer);
      res.end();
    } else {
      answer.status = "Product not found";
      res.send(answer);
      res.end;
    }
  });

  answer.product = [];
};

module.exports = getProducts;
