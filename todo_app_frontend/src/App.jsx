import React, { useEffect } from "react";
import ListItem from "./components/ListItem";
import desktop_dark_bg from "./images/bg-desktop-dark.jpg";
import Hero from "./components/Hero";
import { AppStateContext } from "./components/Context";
import { useContext } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import axios from "axios";

function App() {
  const { data, setData, baseUrl } = useContext(AppStateContext);
  // console.log(data);

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      console.log(response.data.data);
    });
  }, []);

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
    <div className="bg-white h-screen w-screen flex justify-center items-center bg-VeryLightGrey ">
      <div className="absolute top-0 left-0 right-0 z-0 h-2/5 w-full">
        <img src={desktop_dark_bg} alt="background" />
      </div>
      <div className="w-2/4 h-full bg-black z-10 bg-transparent mt-10">
        <Hero />

        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                className="mt-10 bg-VeryLightGrey  rounded"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {data.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
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
      </div>
    </div>
  );
}

export default App;
