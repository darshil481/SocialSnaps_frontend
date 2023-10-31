import React, { useState, useContext } from "react";
import { TbCircleDashed } from "react-icons/tb";
import { profiledata } from "../../Pages/Profile/Profile";

export const ProfileUserDetail = () => {
  const { userData, userPost } = useContext(profiledata);

  return (
    <div className="py-10 w-full w-[75%] ml-10 ">
      <div className="flex items-center">
        <div className="w-[25%]">
          <img
            className="w-32  h-32 rounded-full"
            src={`data:image/jpeg;base64,${userData.img}`}
            alt=""
          />
        </div>
        <div className="space-y-5 ">
          <div className="flex  space-x-10 items-center">
            <p>{userData.userName}</p>
            <button>Edit Profile</button>
            <TbCircleDashed></TbCircleDashed>
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-senibold mr-2">
                {userPost.length != 0 ? userPost.length : "0"}
              </span>
              <span>Post</span>
            </div>
            <div>
              <span className="font-senibold mr-2">
                {userData.follower?.length ? userData?.follower?.length : "0"}
              </span>
              <span>Follower</span>
            </div>
            <div>
              <span className="font-senibold mr-2">
                {userData?.following?.length}
              </span>
              <span>Following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold text-left	">{userData.name}</p>
            <p className="font-thin text-5m text-left ">
              {userData.bio ? userData.bio : "" + " "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
