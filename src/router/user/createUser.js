const fs = require("fs");
const path = require("path");
const shortid = require("shortid");

const getUsersPath = path.join(
  __dirname,
  "../../",
  "db",
  "users",
  `all-users.json`
);
const answer = { status: "success", user: "" };

const createUser = (req, res) => {
  const body = req.body;
  const user = { id: shortid(), ...body };
  const { username, telephone, password, email } = body;

  if (username && telephone && password && email) {
    fs.readFile(getUsersPath, (err, data) => {
      if (err) throw err;
      const arr = JSON.parse(data);
      const newArray = [...arr, user];
      fs.writeFile(getUsersPath, JSON.stringify(newArray), (err) => {
        if (err) throw err;
        res.type("json");
        answer.user = username;
        res.send(answer);
        res.end();
      });
    });
  } else {
    res.status(400).send("Some of the fields is empty");
    res.end();
  }
};

module.exports = createUser;
