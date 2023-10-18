import React from "react";
import PropTypes from "prop-types";

function Error({ error, seterror }) {
  const handleClick = () => {
    seterror(false);
  };
  return (
    <div className="bg-red-400 border border-red-400 text-white px-4 py-2 rounded relative my-4">
      <span className="block sm:inline">{error}</span>
      <span className="absolute top-0 bottom-0 right-0 px-2 py-2">
        <svg
          className="fill-current h-6 w-6 text-white"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={handleClick}
        >
          <path
            fillRule="evenodd"
            d="M2.293 2.293a1 1 0 011.414 0L10 8.586l6.293-6.293a1 1 0 111.414 1.414L11.414 10l6.293 6.293a1 1 0 01-1.414 1.414L10 11.414l-6.293 6.293a1 1 0 01-1.414-1.414L8.586 10 2.293 3.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </div>
  );
}

Error.propTypes = {
  error: PropTypes.string,
  seterror: PropTypes.func,
};

export default Error;
