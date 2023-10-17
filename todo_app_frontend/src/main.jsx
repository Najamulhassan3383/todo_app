import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { AppStateProvider } from "./components/Context";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppStateProvider>
      <DndProvider backend={HTML5Backend}>
        <App />
      </DndProvider>
    </AppStateProvider>
  </React.StrictMode>
);
