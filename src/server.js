const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const router = require("./router/router");

const startServer = (port) => {
  app
    .use(bodyParser.json())
    .use("/", router)
    .use(bodyParser.urlencoded({ extended: true }));

  app.listen(port);
  console.log(`Server has been started at ${port}`);
};

module.exports = startServer;
