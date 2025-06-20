"use client";

import React, { useState } from "react";

const PrivacySecurityTab = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePassword = () => {
    // Add change password logic here
    console.log("Changing password...");
  };

  const handleForgetPassword = () => {
    // Add forget password logic here
    console.log("Forget password request...");
  };

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold bg-clip-text text-transparent" style={{
        background: 'linear-gradient(90deg, #817A99 0%, #0657D0 100%)',
        WebkitBackgroundClip: 'text',
      }}>
        Privacy & Security
      </h3>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h4 className="text-lg font-semibold text-[#0657D0] mb-4">Change Password</h4>
        <div className="space-y-4">
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-2 border border-[#F0EEF4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0657D0]"
            placeholder="Current Password"
          />
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border border-[#F0EEF4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0657D0]"
            placeholder="New Password"
          />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-[#F0EEF4] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0657D0]"
            placeholder="Confirm New Password"
          />
          <button
            onClick={handleChangePassword}
            className="w-full py-2 bg-[#0657D0] text-white rounded-md hover:bg-[#0549a6] transition duration-200"
          >
            Change Password
          </button>
        </div>
        <div className="mt-6">
          <button
            onClick={handleForgetPassword}
            className="text-[#0657D0] hover:underline"
          >
            Forget Password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacySecurityTab;