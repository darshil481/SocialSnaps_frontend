import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";
import menu from "./SidebarConfig";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const [activeTab, setActiveTab] = useState();
  const navigate = useNavigate();
  const handleTabClick = (title) => {
    setActiveTab(title);
    navigate(`/${title}`);
  };
  return (
    <div className="sticky top-0 h-[100vh] ml-5">
      <div className="flex flex-col justify-between h-full px-10">
        <div>
          <div className="pt-10"></div>
          <img className="w-40" src="https://i.imgur.com/zqpwkLQ.png"></img>
        </div>
        <div className="">
          {menu.map((item) => (
            <div
              onClick={() => handleTabClick(item.title)}
              className="flex iteam-center mb-5 cursor-pointer text-1g "
            >
              {activeTab === item.title ? item.activeIcon : item.icon}
              <p
                className={`${
                  activeTab == item.title ? "ml-7 font-bold" : null
                }`}
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
        <div className="flex items-center cursor-pointer pb-10">
          <IoReorderThreeOutline className="text-2xl" />
          <p className="ml-5 ">More</p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
