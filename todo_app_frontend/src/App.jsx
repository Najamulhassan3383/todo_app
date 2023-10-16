import ListItem from "./components/ListItem";
import desktop_dark_bg from "./images/bg-desktop-dark.jpg";

import Hero from "./components/Hero";
import { AppStateContext } from "./components/Context";
import { useContext } from "react";

function App() {
  const { data } = useContext(AppStateContext);
  return (
    // for backgound image which takes half of the screen and rest is white
    <div className="bg-white h-screen w-screen flex justify-center items-center bg-VeryLightGrey ">
      <div className="absolute top-0 left-0 right-0 z-0 h-2/5 w-full">
        <img src={desktop_dark_bg} alt="background" />
      </div>
      <div className="w-2/4 h-full bg-black z-10 bg-transparent mt-10">
        <Hero />

        <div className="mt-10 bg-VeryLightGrey  rounded">
          {data.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;