import PropTypes from "prop-types";

function Error({ error, seterror }) {
  const handleClick = () => {
    seterror(false);
  };
  return (
    <div className="bg-red-400 border border-red-400 text-white px-4 py-2 rounded relative my-4 flex ">
      <div className="mr-4 ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          viewBox="0 0 24 24"
          height="24"
          fill="white"
          className="fill-current"
        >
          <path
            fill="#393a37"
            d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"
          ></path>
        </svg>
      </div>
      <span>{error}</span>
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
