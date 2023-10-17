import PropTypes from "prop-types";
import Check from "../images/icon-check.svg";
import Cross from "../images/icon-cross.svg";
import { useContext } from "react";
import { AppStateContext } from "./Context";
import { useDrag } from "react-dnd";

function ListItem({ item, index }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TODO",
    item: { id: item.id, index },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const { DeleteTodo, AddTodo, ToggleTodo } = useContext(AppStateContext);
  return (
    <div
      ref={(node) => drag(node)}
      className="group flex justify-center items-center border-b border-white relative"
    >
      <div className="w-full h-12 rounded-md pl-4 text-DarkGreyishBlue text-lg flex justify-between items-center">
        <div className="flex justify-start items-center">
          {/* for making a place for icon */}
          {/* wrapper div */}
          <div
            className="h-6 w-6  rounded-xl bg-transparent flex justify-center items-center "
            onClick={() => {
              ToggleTodo(item.id);
            }}
          >
            {item.completed ? (
              <div className="h-6 w-6  rounded-xl bg-button-background flex justify-center items-center  ">
                <img src={Check} alt="check" className="h-3/5 w-3/5" />
              </div>
            ) : (
              <div className="h-6 w-6  rounded-xl bg-button-background flex justify-center items-center hidden group-hover:flex">
                <div className="h-4/5 w-4/5 rounded-xl bg-white"></div>
              </div>
            )}
          </div>

          <p className="ml-4 pr-8 ">{item.title}</p>
        </div>
        <button
          className="hidden rounded-md h-4 w-4 mr-10  group-hover:block"
          onClick={() => {
            DeleteTodo(item.id);
          }}
        >
          <img src={Cross} alt="cross" className="h-full w-full" />
        </button>
      </div>
    </div>
  );
}

export default ListItem;

ListItem.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
};
