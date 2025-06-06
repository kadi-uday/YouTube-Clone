import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {

  const isMenuOpen = useSelector((store) => store.sideBar.isMenuOpen);
  // Early return 
  if(!isMenuOpen) return null;

  return (
   <div className={`bg-[#0f0f0f] text-white w-56 md:w-60 p-4 lg:w-96 lg:z-50 lg:pt-10 text-sm space-y-3 sidebar-scrollbar-hide fixed top-20 left-0 h-[calc(100vh-5rem)] z-50 transform transition-transform duration-700 ease-in-out overflow-y-auto overscroll-contain ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:fixed lg:translate-x-0 lg:h-auto lg:overflow-visible lg:block`}>
          
    <ul className="space-y-1 lg:space-y-2 lg:text-2xl">
      <li className="flex items-center gap-2 px-3 py-3 hover:bg-[#272727] rounded-md cursor-pointer"><Link to='/'>Home</Link></li>
      <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#272727] rounded-md cursor-pointer">Subscriptions</li>
      <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#272727] rounded-md cursor-pointer">Your Videos</li>
      <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#272727] rounded-md cursor-pointer">Watch Later</li>
    </ul>

    <hr className="border-[2px] border-[#303030]" />
    
    <div>
      <h2 className="px-3 py-2 text-gray-400 uppercase tracking-wide lg:text-2xl">Explore</h2>
      <ul className="space-y-1 lg:space-y-2 lg:text-2xl">
        <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#272727] rounded-md cursor-pointer">Trending</li>
        <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#272727] rounded-md cursor-pointer">Shopping</li>
        <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#272727] rounded-md cursor-pointer">Music</li>
        <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#272727] rounded-md cursor-pointer">Film</li>
        <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#272727] rounded-md cursor-pointer">News</li>
        <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#272727] rounded-md cursor-pointer">Sports</li>
      </ul>
    </div>

    <hr className="border-[2px] border-[#303030]" />

    <div>
      <h2 className="px-3 py-2 text-gray-400 uppercase tracking-wide lg:text-2xl">More from YouTube</h2>
      <ul className="space-y-1 lg:space-y-2 lg:text-2xl">
        <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#272727] rounded-md cursor-pointer">YouTube Premium</li>
        <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#272727] rounded-md cursor-pointer">YouTube Studio</li>
        <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#272727] rounded-md cursor-pointer">YouTube Music</li>
        <li className="flex items-center gap-2 px-3 py-2 hover:bg-[#272727] rounded-md cursor-pointer">YouTube Kids</li>
      </ul>
    </div>
</div>

  )
}

export default SideBar;