import React from "react";
import { FaRegMehIconName } from "react-icons/fa";

const UserProfilePage = () => {
  // Assuming you have user data available
  const user = {
    name: "***",
    email: "***@example.com",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  return (
    <div className=" bg-slate-400 container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="bg-white shadow-md p-4">
        <div className="mb-4">
          <label className="font-bold">Name:</label>
          <span className="ml-2">{user.name}</span>
        </div>
        <div className="mb-4">
          <label className="font-bold">Email:</label>
          <span className="ml-2">{user.email}</span>
        </div>
        <div className="mb-4">
          <label className="font-bold">Bio:</label>
          <p className="ml-2">{user.bio}</p>
        </div>

      </div>
    </div>
  );
};

export default UserProfilePage;
