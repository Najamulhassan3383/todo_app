const todoSc = require("../models/Todo");

class Todo {
  getTodos(req, res, next) {
    //get all the todos from the database
    todoSc
      .find()
      .then((todos) => {
        if (!todos) {
          return res
            .status(404)
            .json({ success: false, msg: "No todos found" });
        }
        res.status(200).json({ success: true, data: todos });
      })
      .catch((err) => {
        res.status(400).json({ success: false, msg: err });
      });
    // next();
  }

  postTodos(req, res, next) {
    //create a new todo
    const todo = new todoSc({
      title: req.body.title,
      completed: req.body.completed,
    });
    console.log(todo);
    todoSc

      .create(todo)

      .then((result) => {
        console.log(result);
        res.status(200).json({ success: true, data: result });
      })
      .catch((err) => {
        res.status(400).json({ success: false, msg: err });
      });

    // next();
  }

  updateTodo(req, res, next) {
    const id = req.params.id;

    todoSc
      .findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      })
      .then((result) => {
        if (!result) {
          return res.status(404).json({ success: false, msg: "No todo found" });
        }
        res.status(200).json({ success: true, data: result });
      })
      .catch((err) => {
        res.status(400).json({ success: false, msg: err });
      });
  }

  deleteTodo(req, res, next) {
    const id = req.params.id;
    todoSc
      .findByIdAndDelete(id)
      .then((result) => {
        if (!result) {
          return res.status(404).json({ success: false, msg: "No todo found" });
        }
        res.status(200).json({ success: true, data: result });
      })
      .catch((err) => {
        res.status(400).json({ success: false, msg: err });
      });
  }
}

module.exports = Todo;
