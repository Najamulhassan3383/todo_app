import React, { useContext, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router";
import axios from "axios";
import { AppStateContext } from "./Context";
import { ToastContainer, toast } from "react-toastify";

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { baseUrl, login, setLogin } = useContext(AppStateContext);
  

  const handleSuccess = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const handleError = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const handleClick = async () => {
    let url = baseUrl + "/api/users/auth";
    console.log("i am here");
    try {
      const { data } = await axios.post(
        url,
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      console.log("i am here");
      console.log(data);
      const { message } = data;

      if (!message) {
        console.log("i am here");
        handleSuccess(message);
        setTimeout(() => {
          navigate("/app");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="bg-white p-4 max-w-sm rounded-md shadow-md">
        <p className="text-xl font-semibold text-center text-gray-800 mb-4">
          Sign in to your account
        </p>
        <div className="mb-4 relative">
          <input
            className="border rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-5 w-5 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"></path>
            </svg>
          </span>
        </div>
        <div className="mb-4 relative">
          <input
            className="border rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg
              className="h-5 w-5 text-gray-500"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </span>
        </div>
        <button
          className="bg-purple-600 text-white rounded-md py-2 px-4 w-full transition duration-300 ease-in-out hover:bg-purple-700"
          onClick={handleClick}
        >
          Sign in
        </button>
        <p className="text-gray-600 text-sm text-center mt-2">
          No account?{" "}
          <NavLink to="signup" className="text-blue-500">
            Sign up
          </NavLink>
        </p>
      </div>
      <ToastContainer />
    </>
  );
}

export default SignIn;
