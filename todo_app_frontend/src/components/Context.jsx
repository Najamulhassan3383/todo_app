import React, { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

// data for the todo app

const data = [
  {
    id: 1,
    title: "Learn React",

    completed: false,
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

export const AppStateProvider = ({ children }) => {
  const [data, setData] = useState(data);
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

  const ToggleTodo = (id) => {
    setData(
      data.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <AppStateContext.Provider
      value={{ data, ToggleTheme, AddTodo, DeleteTodo, ToggleTodo }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};
