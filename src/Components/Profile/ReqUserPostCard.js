import React, { useContext } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa6";
import { profiledata } from "../../Pages/Profile/Profile";

export const ReqUserPostCard = () => {
  const { userPost } = useContext(profiledata);

  if (userPost.length == 0 || userPost.length == undefined) {
    return <p>no user posts...</p>;
  }
  return (
    <div className="flex flex-wrap ">
      {userPost &&
        userPost.map((post, index) => (
          <div key={index} className="w-1/3 p-2">
            <img
              src={`data:image/jpeg;base64,${post.post_img}`}
              alt=""
              className="h-48 w-96"
            />
            <div className="flex items-center">
              <div className="flex items-center mr-2">
                <AiOutlineHeart className="mr-1" />
                <span>{post.likeByUser.length}</span>
              </div>
              <div className="flex items-center">
                <FaRegComment className="mr-1" />
                <span>{post.commentByUser.length}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
