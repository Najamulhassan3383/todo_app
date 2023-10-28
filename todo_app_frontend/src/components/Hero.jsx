import React, { useContext, useState } from "react";
import button1 from "../images/icon-sun.svg";
import button2 from "../images/icon-sun.svg";
import { AppStateContext } from "./Context";
import Error from "./Error";
import axios from "axios";

export default function Hero() {
  const { AddTodo, data, setData } = useContext(AppStateContext);
  const [task, setTask] = useState("");
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    let newtask = e.target.value;

    setTask(newtask);
  };

  // make a post request to the backend to add a new todo
  const handleAdd = async () => {
    if (task === "") {
      setError(true);
    } else {
      setError(false);
      const newTodo = {
        title: task,
        isCompleted: false,
      };
      const response = await axios.post(
        "http://localhost:3000/api/todos",
        newTodo,
        {
          withCredentials: true,
        }
      );
      setData([...data, response.data.data]);
      console.log(response);
      setTask("");
    }
  };

  return (
    <>
      {error && (
        <Error
          error={"please enter a task"}
          state={Error}
          seterror={setError}
        />
      )}
      <div className="flex flex-row  justify-between items-center p-4">
        <h1 className="text-white text-3xl font-bold">TODO</h1>
        <button className="text-white text-sm font-bold">
          <img src={button1} alt="button1" />{" "}
          {/* Provide the correct source for the image */}
        </button>
        {/* logout button */}
        <button
          className="text-white text-sm font-bold"
          onClick={() => {
            // Logout();
          }}
        >
          Log out
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
