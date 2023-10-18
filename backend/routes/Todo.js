const express = require("express");

const Todo = require("../controller/Todo");

const router = express.Router();
const todo = new Todo();
console.log(todo);

router.route("/").get(todo.getTodos).post(todo.postTodos);

module.exports = router;
