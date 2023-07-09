import React from "react";

const LoadingMessage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-purple-400 via-slate-600 to-slate-300">
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

        </svg>
        <p className="text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingMessage;
