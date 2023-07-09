import React from "react";

const LoadingMessage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="text-white text-center">
        <svg
          className="animate-spin h-10 w-10 mx-auto mb-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0012 20c4.411 0 8-3.589 8-8h-4c0 2.757-2.243 5-5 5-2.757 0-5-2.243-5-5H6a6.96 6.96 0 002 5.291z"
          ></path>
        </svg>
        <p className="text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingMessage;
