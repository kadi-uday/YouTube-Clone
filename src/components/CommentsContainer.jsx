import React from "react";
import { COMMENTS_DATA } from "../utils/constants";

const commentsData = COMMENTS_DATA;

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex items-start gap-3 p-2 rounded-lg my-2">
      <img
        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
        alt="user"
        src="/user-icon.png"
      />
      <div className="flex flex-col">
        <p className="font-semibold text-sm md:text-base lg:font-bold lg:text-2xl text-gray-200">{name}</p>
        <p className="text-xs md:text-sm lg:text-2xl lg:font-medium text-gray-400">{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies?.length > 0 && (
        <div className="pl-4 md:pl-8 border-l border-gray-600 ml-4 md:ml-6">
          <CommentsList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-2 ml-1 md:m-5 p-2 lg:-ml-1.5">
      <h1 className="text-lg md:text-xl lg:text-3xl font-bold mb-4">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
