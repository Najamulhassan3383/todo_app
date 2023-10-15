import PropTypes from "prop-types";
import Check from "../images/icon-check.svg";
import Cross from "../images/icon-cross.svg";

function ListItem({ title }) {
  return (
    <div className="flex justify-center items-center border-b border-white ">
      <div className="w-full h-12 rounded-md pl-4 text-white  text-lg  flex justify-between items-center">
        <div className="flex justify-start items-center">
          {/* show check icon here */}
          {/* <img src={Check} alt="check" /> */}
          <input
            type="checkbox"
            className="appearance-none w-6 h-6 border rounded-xl   focus:outline-none"
          />

          <p className="ml-4">{title}</p>
        </div>
        <button className="text-white text-sm font-bold bg-primary rounded-md h-8 w-8 mr-10">
          x
        </button>
      </div>
    </div>
  );
}

export default ListItem;

ListItem.propTypes = {
  title: PropTypes.string,
};
