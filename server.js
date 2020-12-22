const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users.js");

const app = express();

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB configuration
const db = require("./config/keys.js").mongoURI;

// connection to the DB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

const port = process.env.PORT || 3000;

// listening app on port
app.listen(port, () => console.log(`Server up and Running on port ${port}`));
