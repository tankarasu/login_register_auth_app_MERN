

import express from "express";
import mongoose from "mongoose";
import { urlencoded, json } from "body-parser";

const app = express();

// middlewares
app.use(urlencoded({ extended: false }));
app.use(json());

// DB configuration
import { mongoURI as db } from "./config/keys.js";

// connection to the DB
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

const port = process.env.PORT || 3000;

// listening app on port
app.listen(port, () => console.log(`Server up and Running on port ${port}`));
