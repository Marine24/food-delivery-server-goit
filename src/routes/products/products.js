const fs = require("fs");

const products = (request, response) => {
  if (request.method === "GET") {
    fs.readFile("./src/db/products/all-products.json", "utf-8", (err, data) => {
      if (err) {
        response.writeHead(404);
        response.write("File not found!");
        response.end();
        throw err;
      }
      response.writeHead(200, { "Content-Type": "text/json" });
      response.write(data);
      response.end();
    });
  }
};

module.exports = products;
