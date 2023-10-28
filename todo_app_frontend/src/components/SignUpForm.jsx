import React, { useContext, useState } from "react";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { AppStateContext } from "./Context";
import { ToastContainer, toast } from "react-toastify";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, setLogin } = useContext(AppStateContext);

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });
  const handleSubmit = async (e) => {
    console.log("i am here");
    console.log(name, email, password);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/users",
        {
          name: name,
          email: email,
          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const { message } = data;
      if (!message) {
        handleSuccess("login successful");
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
    setName("");
  };

  return (
    <>
      <div className="bg-white p-4 max-w-sm rounded-md shadow-md">
        <p className="text-xl font-semibold text-center text-gray-800 mb-4">
          Create an Account
        </p>
        <div className="mb-4 relative">
          <input
            className="border rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4 relative">
          <input
            className="border rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4 relative">
          <input
            className="border rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="bg-purple-600 text-white rounded-md py-2 px-4 w-full transition duration-300 ease-in-out hover:bg-purple-700"
          onClick={handleSubmit}
        >
          Sign up
        </button>
        <div className="text-gray-600 text-sm text-center mt-2">
          <NavLink to="/" className="text-blue-500 ">
            Sign in
          </NavLink>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUpForm;
