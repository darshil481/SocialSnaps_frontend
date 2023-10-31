import React from "react";
import { StoryCircle } from "../../Components/Story/StoryCircle";
import { PostCard } from "../../Components/Post/PostCard";

const Homepage = () => {
  return (
    <div>
      <div className="">
        <div className=" items-center flex ml-10">
          <StoryCircle></StoryCircle>
        </div>
      </div>
      <div className=" ">
        <div className=" items-center flex ml-10">
          <PostCard></PostCard>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
