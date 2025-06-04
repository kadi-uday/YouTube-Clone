import React, { useState } from "react";

const VideoDescription = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="mt-4 text-sm text-gray-300 lg:text-2xl bg-[#272727] rounded-md md:rounded-lg lg:rounded-xl p-2">
      <p>
        {isExpanded ? description : description?.slice(0, 100) + "..."}
      </p>
      <button
        onClick={toggleDescription}
        className="mt-1 text-blue-400 hover:underline focus:outline-none"
      >
        {isExpanded ? "Show Less" : "Show More"}
      </button>
    </div>
  );
};

export default VideoDescription;
