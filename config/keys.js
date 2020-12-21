// dont forget to install module dotenv
import dotenv from "dotenv";
dotenv.config();

const password = process.env.mongoPassword;

module.exports = {
  mongoURI: `mongodb+srv://tankarasu:${password}@tankarasu.mmpal.mongodb.net/test_auth?retryWrites=true&w=majority`,
  secretOrKey: "secret",
};
