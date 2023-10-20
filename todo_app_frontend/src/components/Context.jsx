import { createContext, useState } from "react";
import PropTypes from "prop-types";

const AppStateContext = createContext();

const AppStateProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState("light");
  const baseUrl = "http://localhost:3000";
  const [login, setLogin] = useState(false);

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
        baseUrl,
        login,
        setLogin,
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
