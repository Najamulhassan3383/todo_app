import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { AppStateProvider } from "./components/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppStateProvider>
    <App />
  </AppStateProvider>
);
