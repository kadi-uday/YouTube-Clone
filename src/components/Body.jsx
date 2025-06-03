import React from 'react'
import SideBar from './SideBar';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className=' lg:flex lg:gap-4 bg-[#0f0f0f]'>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default Body;