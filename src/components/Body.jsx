import React from 'react'
import SideBar from './SideBar';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Body = () => {
    const isMenuOpen = useSelector((store) => store.sideBar.isMenuOpen);
  return (
      <div className="bg-[#0f0f0f]">
      <SideBar />
      <div
        className={`transition-all duration-300 ${isMenuOpen ? 'lg:ml-96' : 'lg:ml-0'}`}
      >
        <Outlet />
      </div>
    </div>
  )
}

export default Body;