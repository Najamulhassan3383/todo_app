import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppStateContext = createContext();

// data for the todo app

const dataArray = [
  {
    id: 1,
    title: "Learn React",

    completed: true,
  },
  {
    id: 2,
    title: "Learn Tailwind",

    completed: false,
  },
  {
    id: 3,
    title: "Learn Next.js",

    completed: false,
  },
  {
    id: 4,
    title: "Learn React Native",

    completed: false,
  },
  {
    id: 5,
    title: "Complete homework",
    completed: false,
  },
  {
    id: 6,
    title: "Read a book",
    completed: true,
  },
  {
    id: 7,
    title: "Go for a run",
    completed: false,
  },
  {
    id: 8,
    title: "Write a blog post",
    completed: true,
  },
  {
    id: 9,
    title: "Prepare for presentation",
    completed: true,
  },
];

const AppStateProvider = ({ children }) => {
  const [data, setData] = useState(dataArray);
  const [theme, setTheme] = useState("light");

  const ToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const AddTodo = (todoTask) => {
    const newTodo = {
      id: Math.random(),
      title: todoTask,
      completed: false,
    };
    setData([...data, newTodo]);
  };

  const DeleteTodo = (id) => {
    setData(data.filter((todo) => todo.id !== id));
  };

  const MoveTodo = (id, index) => {
    const dragTodo = data.find((todo) => todo.id === id);
    const filtered = data.filter((todo) => todo.id !== id);
    filtered.splice(index, 0, dragTodo);
    setData(filtered);
  };

  const ToggleTodo = (id) => {
    setData(
      data.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  return (
    <AppStateContext.Provider
      value={{
        data,
        setData,
        ToggleTheme,
        AddTodo,
        DeleteTodo,
        ToggleTodo,
        MoveTodo,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};
AppStateContext.PropTypes = {
  children: PropTypes.object,
};

export { AppStateContext, AppStateProvider };
