import React, { useContext, useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import axios from "axios";
import { AppStateContext } from "./Context";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, setLogin } = useContext(AppStateContext);
  const handleSignUp = () => {
    axios
      .post("http://localhost:3000/api/users", {
        name,
        email,
        password,
      })
      .then((res) => {
        alert("Sign up successfully");
        setLogin(true);
        setEmail("");
        setPassword("");
        setName("");
      })
      .catch((err) => {
        console.log(err);
        alert("Sign up failed");
      });
  };
  return (
    <>
      {login ? (
        <Navigate to="/app" />
      ) : (
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
            onClick={handleSignUp}
          >
            Sign up
          </button>
          <div className="text-gray-600 text-sm text-center mt-2">
            <NavLink to="/" className="text-blue-500 ">
              Sign in
            </NavLink>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpForm;
