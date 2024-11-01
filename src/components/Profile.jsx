import React, { useContext } from "react";
import ProfileContext from "../context/notes/profile/ProfileContext";

const Profile = () => {
  const { userDetails } = useContext(ProfileContext);

  return (
    <div className="flex gap-2 justify-center my-10">
      <div className="w-[30vw] text-center min-h-[50vh] bg-black text-white rounded-lg p-4">
        <div className="flex justify-center my-5">
          <div className="bg-[#1a6e84] rounded-full h-20 w-20 flex items-center justify-center">
            <h1 className="text-black text-4xl font-bold">
              {userDetails? userDetails.name?.charAt(0).toUpperCase() : "?"}
            </h1>
          </div>
        </div>
        {userDetails ? (
          <div>
            <h2 className="text-xl">{userDetails.name}</h2>
            <p>{userDetails.email}</p>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}
      </div>
    </div>
  );
};

export default Profile;




