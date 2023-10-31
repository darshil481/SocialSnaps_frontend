import { BsThreeDots } from "react-icons/bs";
import { FaRegCommentDots } from "react-icons/fa6";
import { AiOutlineHeart } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";
import { BsBookmarkFill, BsBookmark, BsEmojiSmile } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { fetchApiData } from "../../Slice/UserDetaile";
import { fetchAllPhoto, fetchUserPhoto } from "../../Slice/UserPost";
import { fetchStory } from "../../Slice/StoryData";

export const PostCard = () => {
  const [isPostLike, SetisPostLike] = useState(false);
  const [isBooMark, SetisBookMark] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApiData());
  }, [dispatch]);

  const userData = useSelector((state) => state.user.data);
  console.log("user", userData);

  useEffect(() => {
    if (userData.id != undefined) {
      const reqArray = [];
      for (let i = 0; i < userData.following.length; i++) {
        reqArray.push(userData.following[i].id);
      }
      if (reqArray.length == 0) {
        dispatch(fetchAllPhoto(reqArray));
      } else {
        dispatch(fetchUserPhoto(reqArray));
      }
    }
  }, [dispatch, userData.id]);
  useEffect(() => {
    if (userData.id != undefined) {
      let reqArray = [];

      for (let i = 0; i < userData.following.length; i++) {
        reqArray.push(userData.following[i].id);
      }
      console.log(reqArray);
      if (reqArray.length != 0) {
        dispatch(fetchStory(reqArray));
      }
    }
  }, [userData]);

  const postList = useSelector((state) => state.post.data);
  console.log("post", postList);

  const likeHandle = () => {
    SetisPostLike(!isPostLike);
  };

  const bookMarkHanle = () => {
    SetisBookMark(!isBooMark);
  };

  return (
    <div className="space-y-5  rounded-md w-full mt-2 w-1/2">
      {postList.map((post, index) => (
        <div className="border rounded" key={index}>
          <div>
            <div className="flex justify-between items-center w-full ml-1">
              <div className="flex items-center   mt-1">
                <img
                  className="h-12 w-12 rounded-full"
                  src={`data:image/jpeg;base64,${post.user.img}`}
                  alt=""
                />
                <div>
                  <div className="ml-3 items-start ">
                    <p className="font-semibold text-sm text-start pl-2">
                      {post.user.userName}
                    </p>
                    <p className="font-thin text-sm items-start pl-2">
                      {post.location}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mr-3 ">
                <BsThreeDots></BsThreeDots>
              </div>
            </div>
            <div className="mt-3 ">
              <img
                src={`data:image/jpeg;base64,${post.post_img}`}
                className="px-10 py-2 "
                alt=""
              />
            </div>
            <div className="flex   justify-between items-center w-full px-3 py-2">
              <div className="flex items-center  mt-2">
                {isPostLike === false ? (
                  <AiOutlineHeart
                    className="text-xl hover:opacity-50 cursor-pointer"
                    onClick={likeHandle}
                  ></AiOutlineHeart>
                ) : (
                  <AiOutlineHeart
                    className="text-red-600 text-xl hover:opacity-50 cursor-pointer "
                    onClick={likeHandle}
                  ></AiOutlineHeart>
                )}
                <FaRegCommentDots className="text-xl hover:opacity-50 cursor-pointer ml-3  "></FaRegCommentDots>
                <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer ml-3   "></RiSendPlaneLine>
              </div>
              <div>
                {isBooMark === true ? (
                  <BsBookmarkFill
                    className=" text-xl hover:opacity-50 cursor-pointer ml-2 "
                    onClick={() => bookMarkHanle()}
                  ></BsBookmarkFill>
                ) : (
                  <BsBookmark
                    className=" text-xl hover:opacity-50 cursor-pointer ml-2 "
                    onClick={() => bookMarkHanle()}
                  ></BsBookmark>
                )}
              </div>
            </div>
          </div>
          <div className="w-full py-2 px-4 text-start">
            <p className="text-sm">{post.likeByUser.length} Likes</p>
            <p className="opacity-50 py-2 cursor-pointer text-sm  ">
              {post.commentByUser.length != 0
                ? `View all ${post.commentByUser.length} comment`
                : null}
            </p>
          </div>
          <div>
            <div className="flex w-full items-center px-4 ">
              <BsEmojiSmile></BsEmojiSmile>
              <input
                className=" px-2 ml-1"
                type="text"
                placeholder="Add a comment..."
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
