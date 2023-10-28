const express = require("express");
const dotenv = require("dotenv");
const { notFound, errorHandler } = require("./Middleware/errorMiddleware");

const connectDB = require("./config/Db");
const Todo = require("./routes/Todo");
var cors = require("cors");
const authUser = require("./routes/UserRoutes");
const cookieParser = require("cookie-parser");

const app = express();
// Load env vars
dotenv.config({ path: "./config/config.env" });

const corsConfig = {
  credentials: true,
  origin: true,
};
app.use(cors(corsConfig));
app.use(cookieParser());
connectDB();

app.use(express.json({ type: "application/json" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/todos", Todo);
app.use("/api/users", authUser);

app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
