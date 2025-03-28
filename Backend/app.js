const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectToDb = require("./db/db.js");
const userRoutes = require("./routes/user.route.js");
const cookeiParser = require("cookie-parser");

connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookeiParser());
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.use("/users", userRoutes);

module.exports = app;
