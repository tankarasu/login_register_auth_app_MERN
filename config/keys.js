const password = process.env.mongoPassword;

module.exports = {
  mongoURI: `mongodb+srv://tankarasu:${password}@tankarasu.mmpal.mongodb.net/admin?authSource=admin&replicaSet=tankarasu-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`,
};
