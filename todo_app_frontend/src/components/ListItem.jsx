import PropTypes from "prop-types";

function ListItem({ title }) {
  return (
    <div className="flex justify-center items-center ">
      <div className="w-full h-12 rounded-md pl-4 text-white bg-DarkGreyishBlue text-lg  flex justify-between items-center">
        <div className="flex justify-start items-center">
          <input type="checkbox" />
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
