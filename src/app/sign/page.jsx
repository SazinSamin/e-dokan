'use client';

import React, { useState } from "react";
import axios from "axios";
import { redirect } from "next/dist/server/api-utils";

const LoginPage = () => {

  const [mobileNumber, setMobileNumber] = useState("");
  const [name, setName] = useState("");

  const handleMobileNumberChange = (event) => {
    setMobileNumber(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    
    try {
      // Make request to the backend to authenticate the user
      const response = await axios.post("", {
        mobileNumber,
        name,
      });
      const token = response.data.token;

      // Store the JWT token in local storage
      localStorage.setItem("token", token);

      // Reset the form
      setMobileNumber("");
      setName("");

      // Redirect to the home page
      window.location.href = "/registration";
    } catch (error) {
      console.error(error);
      // Handle authentication error
    }
    //res.redirect('/registration')
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        className=" bg-slate-400 p-8 rounded shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mobileNumber"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobileNumber"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your mobile number"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
          >
            Log In
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-950 text-white font-bold py-2 px-4 rounded-3xl focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
