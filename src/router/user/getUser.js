const fs = require("fs");
const path = require("path");
const usersPath = path.join(
  __dirname,
  "../../",
  "db",
  "users",
  "all-users.json"
);

const getUserById = (req, res) => {
  const answer = {
    status: "",
    users: [],
  };
  const ids = req.params.id;
  fs.readFile(usersPath, "utf8", (err, data) => {
    if (err) throw err;
    const arr = JSON.parse(data);
    const filtered = arr.filter((item) => ids.includes(item.id));

    if (filtered.length > 0) {
      answer.users = filtered;
      answer.status = "User successfully found";
      res.send(answer);
      res.end();
    } else {
      answer.status = "User not found";
      res.send(answer);
      res.end;
    }
  });

  answer.users = [];
};

module.exports = getUserById;
