const dbUser = "marine24";
const dbPassword = "marine24";

const config = {
  port: 3003,
  dbUser,
  dbPassword,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@cluster0-0whr0.mongodb.net/test?retryWrites=true&w=majority`,
};

module.exports = config;