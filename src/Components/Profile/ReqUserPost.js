import React, { useContext, useState } from "react";
import { AiOutlineTable } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
import { BiBookmark } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { ReqUserPostCard } from "./ReqUserPostCard";
import ReqUserReelCard from "./ReqUserReelCard";
import { ReqUserSavedCard } from "./ReqUserSavedCard";
import { ReqUserTaggedCard } from "./ReqUserTaggedCard";

const ReqUserPost = () => {
  const [activeTab, setactiveTab] = useState("Post");
  const handelTabChange = (tabName) => {
    setactiveTab(tabName);
  };
  const tab = [
    {
      tab: "Post",
      icon: <AiOutlineTable></AiOutlineTable>,
    },
    {
      tab: "Reel",
      icon: <RiVideoAddLine></RiVideoAddLine>,
    },
    {
      tab: "Saved",
      icon: <BiBookmark></BiBookmark>,
    },
    {
      tab: "Tagged",
      icon: <AiOutlineUser></AiOutlineUser>,
    },
  ];
  return (
    <div>
      <div className="flex space-x-14 border-t relative ">
        {tab.map((item) => (
          <div
            key={item.tab}
            className="flex item-center cursor-pointer py-2 text-sm items-center"
            onClick={() => handelTabChange(item.tab)}
          >
            <p>{item.icon}</p>
            <p className={`ml-1 ${activeTab === item.tab ? "font-bold" : ""}`}>
              {item.tab}
            </p>
          </div>
        ))}
      </div>
      {activeTab === "Post" ? <ReqUserPostCard></ReqUserPostCard> : null}
      {activeTab === "Reel" ? <ReqUserReelCard></ReqUserReelCard> : null}
      {activeTab === "Saved" ? <ReqUserSavedCard></ReqUserSavedCard> : null}
      {activeTab === "Tagged" ? <ReqUserTaggedCard></ReqUserTaggedCard> : null}
    </div>
  );
};

export default ReqUserPost;
