import React , {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/sideBarSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import useVideoDetails from '../utils/useVideoDetails';
import useChannelIcon from '../utils/useChannelIcon';
import VideoDescription from './VideoDescription';
import SvgButtons from './SvgButtons';

const WatchPage = () => {

  const { videoId, videoInfo } = useVideoDetails();
  const { snippet, statistics } = videoInfo || {};
  const { title, channelId, channelTitle, description } = snippet || {};
  const iconUrl = useChannelIcon(channelId);

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, [])

  return (

    <div className="relative px-0 py-2 md:px-4 mt-20 lg:pl-24 lg:mt-32 lg:w-8/12 ">
        <div className="w-full aspect-video rounded-sm md:rounded-md lg:rounded-lg overflow-hidden lg:max-w-none">
            <iframe
            src={"https://www.youtube.com/embed/"+searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full "
            frameBorder="0"
            ></iframe>
        </div>

      <div className="mx-3 lg:mx-0">
        <h1 className="text-xl font-semibold mt-4 md:text-2xl lg:text-4xl lg:font-bold text-white">{title}</h1>
        <div className="flex flex-col md:flex-row justify-between md:items-center mt-4 gap-4">
          <div className="flex gap-4 items-start lg:mt-2">
            {iconUrl ? (
              <img src={iconUrl} alt="Channel Icon" className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full" />
            ) : (
              <div className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-gray-700 animate-pulse" />
            )}

            <div className="text-white lg:h-20">
              <p className="text-base md:text-xl lg:text-3xl font-medium lg:font-bold">{channelTitle}</p>
              <p className="text-sm md:text-base lg:text-xl text-gray-400">{statistics?.viewCount} views</p>
            </div>
          </div>
          <SvgButtons />
        </div>
      </div>


      <div className='mx-3 md:mx-0 lg:mx-0'>
        <VideoDescription description={description} />
      </div>

      <CommentsContainer />
    </div>

  )
}

export default WatchPage;