import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SignIn from "./components/SignIn.jsx";
import SignUpForm from "./components/SignUpForm.jsx";

import { AppStateProvider } from "./components/Context";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "",
        element: <SignIn />,
      },
      {
        path: "signup",
        element: <SignUpForm />,
      },
      {
        path: "app",
        element: <App />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppStateProvider>
    <RouterProvider router={router} />
  </AppStateProvider>
);
