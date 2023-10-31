import React, { useState, useEffect, createContext } from "react";
import { ProfileUserDetail } from "../../Components/Profile/ProfileUserDetail";
import ReqUserPost from "../../Components/Profile/ReqUserPost";
import instance from "../../Components/Interceptors/Interceptors";
import { ColorRing } from "react-loader-spinner";
export const profiledata = createContext();

export const Profile = () => {
  const [userData, setUserData] = useState({});
  const [userPost, setUserPost] = useState({});
  const [followingPost, steFollowingPost] = useState({});
  const [story, setStory] = useState({});

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    if (userData.id !== undefined) {
      fetchUserImage();
    }
  }, [userData]);

  async function fetchUserImage() {
    try {
      if (userData.id !== undefined) {
        const response = await instance.get(`/findPostByUserId/${userData.id}`);
        setUserPost(response.data);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  async function fetchData() {
    try {
      const response = await instance.get("/findUserProfile");
      setUserData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  // Call fetchUserImage after userData is updated

  return (
    <profiledata.Provider value={{ userData, userPost }}>
      <div className="flex-row  border border-1-slate-500 border">
        {userData ? <ProfileUserDetail /> : null}
        <ReqUserPost />
      </div>
    </profiledata.Provider>
  );
};
