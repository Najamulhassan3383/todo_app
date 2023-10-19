import React from "react";
import { NavLink } from "react-router-dom";

const SignUpForm = () => {
  return (
    <div className="bg-white p-4 max-w-sm rounded-md shadow-md">
      <p className="text-xl font-semibold text-center text-gray-800 mb-4">
        Create an Account
      </p>
      <div className="mb-4 relative">
        <input
          className="border rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
          type="text"
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-4 relative">
        <input
          className="border rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
          type="email"
          placeholder="Enter email"
        />
      </div>
      <div className="mb-4 relative">
        <input
          className="border rounded-md w-full py-2 px-3 focus:outline-none focus:border-blue-500"
          type="password"
          placeholder="Enter password"
        />
      </div>
      <button className="bg-purple-600 text-white rounded-md py-2 px-4 w-full transition duration-300 ease-in-out hover:bg-purple-700">
        Sign up
      </button>
      <div className="text-gray-600 text-sm text-center mt-2">
        <NavLink to="/" className="text-blue-500 ">
          Sign in
        </NavLink>
      </div>
    </div>
  );
};

export default SignUpForm;
