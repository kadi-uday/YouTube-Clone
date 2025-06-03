import React from 'react'
import ButtonList from './ButtonList';
import VideoContainer from './VideoContainer';

const MainContainer = () => {
  return (
    <div className='bg-[#0f0f0f] flex-1 overflow-auto min-h-screen md:min-h-screen lg:max-h-full '>
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer;