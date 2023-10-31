import React from "react";
import { useSelector } from "react-redux";
import Story from "../Story/StoryCss.css";

export const StoryCircle = () => {
  const storyList = useSelector((state) => state.story.data);
  console.log("story", storyList);
  const showStory = () => {
    console.log("hi");
  };

  return (
    <div className="flex  border border-1-slate-500 rounded-md mt-10 ">
      {storyList.map((item, index) => (
        <section className=" justify-center items-center">
          <ul className="w-full md:w-3/4 m-2 lg:w-1/2 flex justify-between items-start mb-8 space-x-3 overflow-x-scroll stories bg-white p-4 rounded drop-shadow-xl">
            <li className="flex flex-none flex-col items-center space-y-1">
              <div className="bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
                <a
                  href="#"
                  className="block bg-white p-1 rounded-full relative"
                >
                  <img
                    src="https://images.unsplash.com/photo-1579105728744-9d6b14a45389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=683&q=80"
                    alt="Omid Armin"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute bottom-0 right-1 border border-white border-2 rounded-full"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.125 16C12.4742 16 16 12.4742 16 8.125C16 3.77576 12.4742 0.25 8.125 0.25C3.77576 0.25 0.25 3.77576 0.25 8.125C0.25 12.4742 3.77576 16 8.125 16Z"
                      fill="#0074cc"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.61719 4.67969C8.61719 4.40786 8.39683 4.1875 8.125 4.1875C7.85317 4.1875 7.63281 4.40786 7.63281 4.67969V7.63281H4.67969C4.40786 7.63281 4.1875 7.85317 4.1875 8.125C4.1875 8.39683 4.40786 8.61719 4.67969 8.61719H7.63281V11.5703C7.63281 11.8421 7.85317 12.0625 8.125 12.0625C8.39683 12.0625 8.61719 11.8421 8.61719 11.5703V8.61719H11.5703C11.8421 8.61719 12.0625 8.39683 12.0625 8.125C12.0625 7.85317 11.8421 7.63281 11.5703 7.63281H8.61719V4.67969Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </a>
              </div>
              <a href="#" className="text-xs text-slate-800 font-semibold">
                Your story
              </a>
            </li>
          </ul>
        </section>
      ))}
    </div>
  );
};
