import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { AppStateProvider } from "./components/Context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppStateProvider>
    <RouterProvider router={router} />
  </AppStateProvider>
);
