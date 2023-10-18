const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/Db");

// Load env vars
dotenv.config({ path: "./config/config.env" });
connectDB();

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
