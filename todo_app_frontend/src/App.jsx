import desktop_dark_bg from "./images/bg-desktop-dark.jpg";
import button1 from "./images/icon-moon.svg";
import button2 from "./images/icon-sun.svg";

function App() {
  return (
    // for backgound image which takes half of the screen and rest is white
    <div className="bg-white h-screen w-screen flex justify-center items-center bg-VeryLightGrey ">
      <div className="absolute top-0 left-0 right-0 z-0 h-2/5 w-full">
        <img src={desktop_dark_bg} alt="background" />
      </div>
      <div className="w-2/4 h-full bg-black z-10 bg-transparent mt-10">
        {/* heading and a buuton */}
        <div className="flex justify-between items-center p-4">
          <h1 className="text-white text-3xl font-bold">TODO</h1>
          <button className="text-white text-sm font-bold">
            <img src={button1} alt="button1" />
          </button>
        </div>
        {/* input field */}
        <div className="flex justify-center items-center p-4">
          <input
            className="w-full h-12 rounded-md pl-4 text-VeryDarkGreyishBlue text-lg font-bold"
            type="text"
            placeholder="Create a new todo..."
          />
          {/* button for adding */}
          <button className="text-white text-sm font-bold bg-primary rounded-md h-12 w-12 ml-4">
            +
          </button>
        </div>
        {/* list of todos */}
        <div className="mt-10">
          <div className="flex justify-center items-center ">
            <div className="w-full h-12 rounded-md pl-4 text-white bg-DarkGreyishBlue text-lg  flex justify-between items-center">
              <div className="flex justify-start items-center">
                <input type="checkbox" />
                <p className="ml-4">Complete online JavaScript course</p>
              </div>
              <button className="text-white text-sm font-bold bg-primary rounded-md h-8 w-8 mr-10">
                x
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <div className="w-full h-12 rounded-md pl-4 text-VeryDarkGreyishBlue bg-DarkGreyishBlue text-lg font-bold flex justify-between items-center">
              <div className="flex justify-start items-center">
                <input type="checkbox" />
                <p className="ml-4">Complete online JavaScript course</p>
              </div>
              <button className="text-white text-sm font-bold bg-primary rounded-md h-8 w-8 mr-10">
                x
              </button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full h-12 rounded-md pl-4 text-VeryDarkGreyishBlue bg-DarkGreyishBlue text-lg font-bold flex justify-between items-center">
              <div className="flex justify-start items-center">
                <input type="checkbox" />
                <p className="ml-4">Complete online JavaScript course</p>
              </div>
              <button className="text-white text-sm font-bold bg-primary rounded-md h-8 w-8 mr-10">
                x
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
