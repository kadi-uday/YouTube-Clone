import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/sideBarSlice';

const Head = () => {

  const dispatch = useDispatch();
  const toggleHandleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="bg-[#0f0f0f] fixed top-0 w-full z-50 h-20 md:h-20 lg:h-28 grid grid-cols-12 items-center px-4 md:px-6 lg:px-10 gap-4">
  
  <div className="flex items-center col-span-3 gap-2 ">
    <img onClick={() => toggleHandleClick()} className="h-6 md:h-8 lg:h-12 cursor-pointer" src="/menu-icon.png" alt="menu-icon" />
    <img
      className="h-10 w-auto mt-1 md:h-20 lg:h-24 "
      src="/youtube-logo.png"
      alt="youtube-logo"
    />
  </div>

  
  <div className="flex items-center col-span-7 justify-center ml-5">
    <input
      type="text"
      placeholder="Search"
      className="w-full max-w-md lg:max-w-5xl px-4 py-1 bg-[#121212] lg:border-[2px] border border-[#6d6d6d] text-white rounded-l-full outline-none text-sm md:text-base lg:text-xl lg:py-2"
    />
    <button
      aria-label="Search"
      className="p-2  bg-[#4d4c4c] rounded-r-full hover:bg-[#333333] transition"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-[14px] md:w-6 md:h-5 lg:w-8 lg:h-8 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
        />
      </svg>
    </button>
  </div>

  
  <div className="flex justify-end col-span-2">
    <img
      className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 rounded-full"
      src="/user-icon.png"
      alt="user-icon"
    />
  </div>
</div>

  );
};

export default Head;