const express = require("express");
const dotenv = require("dotenv");
const app = express();
const connectDB = require("./config/Db");
const Todo = require("./routes/Todo");
var cors = require("cors");

// Load env vars
dotenv.config({ path: "./config/config.env" });
app.use(cors());
connectDB();

app.use(express.json());
app.use("/", Todo);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
