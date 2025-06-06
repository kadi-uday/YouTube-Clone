import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    getVideos();
  },[]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json.items);
  }
  
  return (
    <div className='bg-[#0f0f0f] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-1 w-full max-w-full overflow-x-hidden' >
      {videos&& videos.map((video) => (<Link to={"/watch?v="+ video.id} state={{video}} key={video.id}> <VideoCard  info={video} /> </Link>))}
    </div>
  )
}

export default VideoContainer;