const todoSc = require("../models/Todo");

class Todo {
  getTodos(req, res, next) {
    console.log(req.user);
    todoSc
      .find({ user: req.user._id.valueOf() })
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
    console.log(req.user);
    const todo = new todoSc({
      title: req.body.title,
      completed: req.body.completed,
      user: req.user._id,
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
      .findByIdAndUpdate({ _id: id, user: req.user._id.valueOf() }, req.body, {
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
      .findByIdAndDelete({ _id: id, user: req.user._id.valueOf() })
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
