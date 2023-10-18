const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/Db");
const Todo = require("./routes/Todo");

// Load env vars
dotenv.config({ path: "./config/config.env" });
connectDB();

app.use(express.json());
app.use("/", Todo);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
