import React from 'react'
import useChannelIcon from '../utils/useChannelIcon';

const VideoCard = ({info}) => {

    const {snippet , statistics} = info;
    const {channelId, channelTitle, title, thumbnails} = snippet;
    const iconUrl = useChannelIcon(channelId);

  return (
<div className="w-full sm:w-1/2 md:w-full lg:w-full px-4 py-3 mt-4 lg:mt-8 cursor-pointer">
  <img
    src={thumbnails.medium.url}
    alt="thumbnail"
    className="rounded-2xl w-full h-56 lg:h-auto object-cover"
  />
  <div className="flex mt-3 gap-3">
    <div className="w-12 h-12 lg:h-16 lg:w-16 rounded-full bg-gray-700 overflow-hidden">
      {iconUrl && (
        <img src={iconUrl} alt="channel icon" className="w-12 h-12 lg:h-20 lg:w-20 rounded-full" />
      )}
    </div> 
    <div className="flex flex-col text-white">
      <h3 className="font-semibold text-sm leading-snug line-clamp-2 lg:text-2xl">
        {title}
      </h3>
      <p className="text-xs text-gray-400 mt-1 lg:text-xl">{channelTitle}</p>
      <p className="text-xs text-gray-400 lg:text-xl">
        {Number(statistics.viewCount).toLocaleString()} views
      </p>
    </div>
  </div>
</div>

  )
}

export default VideoCard;