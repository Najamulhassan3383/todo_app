const express = require("express");

const Todo = require("../controller/Todo");
const { protect } = require("../Middleware/authMiddleware");

const router = express.Router();
const todo = new Todo();

router.route("/").get(protect, todo.getTodos).post(protect, todo.postTodos);
router
  .route("/:id")
  .put(protect, todo.updateTodo)
  .delete(protect, todo.deleteTodo);

module.exports = router;
