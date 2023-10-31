import { configureStore } from "@reduxjs/toolkit";
import UserDetaile from "../../Slice/UserDetaile"; // Make sure the path is correct
import UserPost from "../../Slice/UserPost";
import StoryData from "../../Slice/StoryData";

const store = configureStore({
  reducer: {
    user: UserDetaile,
    post: UserPost,
    story: StoryData,
  },
});

export default store;
