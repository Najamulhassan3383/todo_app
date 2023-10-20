import { Outlet } from "react-router-dom";
import desktop_dark_bg from "./images/bg-desktop-dark.jpg";

function Layout() {
  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center bg-VeryLightGrey ">
      <div className="absolute top-0 left-0 right-0 z-0 h-2/5 w-full">
        <img src={desktop_dark_bg} alt="background" />
      </div>
      <div className="w-2/4 h-full bg-black z-10 bg-transparent mt-10 ">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
