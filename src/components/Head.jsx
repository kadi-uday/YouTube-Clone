import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/sideBarSlice';
import {YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search); 

  const dispatch = useDispatch();
  const toggleHandleClick = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    
   const timer = setTimeout(() => {
    if(searchCache[searchQuery]) {
      setSuggestions(searchCache[searchQuery]);
    }
    else {
      getSearchSuggestions();
    }
   },200); 

   return () => {
    clearTimeout(timer);
   };

  },[searchQuery]);

const getSearchSuggestions = async () => {
  console.log("api key: "+ searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json= await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery] : json[1],
      })
    );
};

  return (
    <div className="bg-[#0f0f0f] fixed top-0 w-full z-50 h-20 md:h-20 lg:h-28 grid grid-cols-12 items-center px-4 md:px-6 lg:px-10 gap-4">
  
  <div className="flex items-center col-span-3 gap-2 ">
    <img onClick={() => toggleHandleClick()} className="h-6 md:h-8 lg:h-12 cursor-pointer" src="/menu-icon.png" alt="menu-icon" />
    <a href='/' >
      <img
      className="h-10 w-auto mt-1 md:h-20 lg:h-24 "
      src="/youtube-logo.png"
      alt="youtube-logo"/> 
    </a>   
  </div>

  
  <div className="flex items-center col-span-7 justify-center ml-5 relative w-full max-w-6xl">
  <input
    type="text"
    placeholder="Search"
    className="w-full px-4 py-1 bg-[#121212] border border-[#6d6d6d] text-white rounded-l-full outline-none text-sm md:text-base lg:text-xl lg:py-2 focus:ring-0 focus:ring-red-500 focus:border-red-500"
    onChange={(e) => setSearchQuery(e.target.value)}
    value={searchQuery}
    onFocus={() => setShowSuggestions(true)}
    onBlur={() => setShowSuggestions(false)}
  />
  <button
    aria-label="Search"
    className="p-2 bg-[#4d4c4c] rounded-r-full hover:bg-[#333333] transition"
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

  {showSuggestions&& suggestions.length >0  && (
    <div className="absolute z-50 bg-[#222222] top-full left-0 right-0 mt-1 px-2 py-1 shadow-lg rounded-lg border border-[#6d6d6d] max-h-screen overflow-y-auto ">
      <ul>
        {suggestions.map((s) => (
          <li
            key={s}
            className="flex items-center gap-2 py-2 px-3 lg:gap-4 text-white lg:text-2xl lg:font-medium hover:bg-[#333333] rounded cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 md:w-5 md:h-5 lg:w-8 lg:h-8 text-gray-300"
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
            {s}
          </li>
        ))}
      </ul>
    </div>
  )}
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