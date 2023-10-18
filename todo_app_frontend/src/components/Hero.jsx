import React, { useContext, useState } from "react";
import button1 from "../images/icon-sun.svg";
import button2 from "../images/icon-sun.svg";
import { AppStateContext } from "./Context";

export default function Hero() {
  const { AddTodo } = useContext(AppStateContext);
  const [task, setTask] = useState("");
  const handleChange = (e) => {
    let newtask = e.target.value.trim();
    setTask(newtask);
  };
  const handleAdd = () => {
    if (task) {
      AddTodo(task);
      setTask("");
    } else {
      alert("Enter a valid task");
    }
  };
  return (
    <>
      <div className="flex justify-between items-center p-4">
        <h1 className="text-white text-3xl font-bold">TODO</h1>
        <button className="text-white text-sm font-bold">
          <img src={button1} alt="button1" />{" "}
          {/* Provide the correct source for the image */}
        </button>
      </div>

      <div className="flex justify-center items-center p-4">
        <input
          className="w-full h-12 rounded-md pl-4 text-VeryDarkGreyishBlue text-lg font-bold"
          type="text"
          placeholder="Create a new todo..."
          value={task}
          onChange={handleChange}
        />
        {/* button for adding */}
        <button
          className="text-white text-sm font-bold bg-primary rounded-md h-12 w-12 ml-4"
          onClick={() => {
            handleAdd();
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
