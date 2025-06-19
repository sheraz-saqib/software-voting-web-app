"use client";

import React, { useState } from "react";

const ProfileTab = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "/assets/images/default-avatar.png",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold bg-clip-text text-transparent" style={{
        background: 'linear-gradient(90deg, #817A99 0%, #0657D0 100%)',
        WebkitBackgroundClip: 'text',
      }}>
        Edit Profile
      </h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-center space-x-4 mb-4">
          <img src={userData.avatar} alt="Avatar" className="w-20 h-20 rounded-full" />
          <button className="text-[#0657D0] hover:underline">Change Avatar</button>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            className="w-full p-2 border border-[#F0EEF4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0657D0]"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            className="w-full p-2 border border-[#F0EEF4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0657D0]"
            placeholder="Email"
          />
          <button className="w-full py-2 bg-[#0657D0] text-white rounded-md hover:bg-[#0549a6] transition duration-200">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;