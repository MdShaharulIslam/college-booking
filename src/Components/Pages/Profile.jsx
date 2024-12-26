import React from "react";
import useAuth from "../../Components/hooks/useAuth";

const Profile = () => {
  const { user } = useAuth(); 
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold">No user data available. Please sign in.</h2>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto my-10 p-5 bg-gray-100 rounded-xl">
      <h2 className="text-3xl font-bold text-center mb-5">Your Profile</h2>
      <div className="flex flex-col items-center md:flex-row gap-5">
        <div className="flex-shrink-0">
          <img
            src={user.photoURL || "https://via.placeholder.com/150"}
            alt={user.displayName || "User Photo"}
            className="w-40 h-40 rounded-full object-cover"
          />
        </div>
        <div className="flex-1 bg-white p-5 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-3">User Information</h3>
          <p className="text-gray-700">
            <span className="font-medium">Name:</span> {user.displayName || "N/A"}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Email:</span> {user.email}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Photo URL:</span>{" "}
            {user.photoURL || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
