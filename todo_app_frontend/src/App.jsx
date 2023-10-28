import React, { useEffect, useState } from "react";
import ListItem from "./components/ListItem";
import desktop_dark_bg from "./images/bg-desktop-dark.jpg";
import Hero from "./components/Hero";
import { AppStateContext } from "./components/Context";
import { useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";
import Loader from "./components/Loader";
import { useNavigate } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import { useCookies } from "react-cookie";

function App() {
  const { data, setData, baseUrl, login } = useContext(AppStateContext);
  // console.log(data);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  // const [error, setError] = useState(false);

  useEffect(() => {
    const verifyCookie = async () => {
      const response = await axios.get(
        "http://localhost:3000/api/todos",

        { withCredentials: true }
      );
      console.log(response);
      setData(response.data.data);

      setLoading(false);
      setUsername("najm");
      return response.data
        ? toast(`Hello `, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie, setData]);
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  function onDragEnd(result) {
    if (!result.destination) {
      return;
    }
    const newItems = [...data];
    const [removed] = newItems.splice(result.source.index, 1);
    newItems.splice(result.destination.index, 0, removed);
    setData(newItems);
  }

  return (
    <>
      <div className=" background-image  overflow-hidden">
        <div className="max-w-6xl bg-transparent   mt-10">
          <Hero />
          {loading ? (
            <Loader />
          ) : (
            <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    className="mt-10 bg-transparent rounded"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {data.map((item, index) => (
                      <Draggable
                        key={item._id}
                        draggableId={item._id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <ListItem item={item} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          )}
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
