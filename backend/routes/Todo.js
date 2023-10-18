const express = require("express");

const Todo = require("../controller/Todo");

const router = express.Router();
const todo = new Todo();
console.log(todo);

router.route("/").get(todo.getTodos).post(todo.postTodos);
router.route("/:id").put(todo.updateTodo).delete(todo.deleteTodo);

module.exports = router;
