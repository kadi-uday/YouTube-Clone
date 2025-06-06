import React , {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/sideBarSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import useVideoDetails from '../utils/useVideoDetails';
import useChannelIcon from '../utils/useChannelIcon';
import VideoDescription from './VideoDescription';
import SvgButtons from './SvgButtons';
import LiveChart from './LiveChart';

const WatchPage = () => {

  const [showChat, setShowChat] = useState(false); 

  useEffect(() => {
    const isLargeScreen = window.matchMedia('(min-width: 1024px)').matches; // lg breakpoint
    setShowChat(isLargeScreen);
  }, []);

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
    <div className="relative px-0 py-2 md:px-4 mt-20 lg:pl-24 lg:mt-32 lg:w-full lg:overflow-hidden">
      <div className="flex flex-col lg:flex-row w-full gap-4">
        {/* 🎥 Video + Details Section */}
        <div className="w-full lg:w-2/3">
          <div className="w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              src={`https://www.youtube.com/embed/${searchParams.get('v')}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              frameBorder="0"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* ✅ Button + Chat for sm/md (below video) */}
          <div className="lg:hidden mt-3 px-2">
            <button
              className="px-4 py-2 w-full border border-[#6d6d6d] bg-[#0f0f0f] hover:bg-[#363636] text-white rounded-full text-sm md:text-base font-medium"
              onClick={() => setShowChat(!showChat)}
            >
              {showChat ? 'Hide Live Chat' : 'Show Live Chat'}
            </button>

            {showChat && (
              <div className="h-80 mt-3 bg-[#0f0f0f] border border-[#6d6d6d] rounded-lg text-white overflow-hidden">
                <LiveChart />
              </div>
            )}
          </div>

          {/* 📝 Video Title & Channel Info */}
          <div className="mx-3 lg:mx-0 mt-4 lg:w-full">
            <h1 className="text-xl font-semibold md:text-2xl lg:text-4xl lg:font-bold text-white">{title}</h1>
            <div className="flex flex-col md:flex-row justify-between md:items-center mt-4 gap-4">
              <div className="flex gap-4 items-start lg:mt-2">
                {iconUrl ? (
                  <img
                    src={iconUrl}
                    alt="Channel Icon"
                    className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full"
                  />
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

          {/* 📃 Description */}
          <div className="mx-3 md:mx-0 lg:mx-0 lg:w-full">
            <VideoDescription description={description} />
          </div>

          {/* 💬 Comments */}
          <CommentsContainer />
        </div>

        {/* ✅ Chat Panel for lg screens (right side) */}
        <div className="hidden lg:flex flex-col w-1/3 px-1">
          <div className="mb-2">
            <button
              className="px-4 py-3 w-full border border-[#6d6d6d] bg-[#0f0f0f] hover:bg-[#363636] text-white rounded-full text-2xl font-medium"
              onClick={() => setShowChat(!showChat)}
            >
              {showChat ? 'Hide Live Chat' : 'Show Live Chat'}
            </button>
          </div>

          {showChat && (
            <div className="h-[50rem] bg-[#0f0f0f] border border-[#6d6d6d] rounded-lg text-white overflow-hidden">
              <LiveChart />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};


export default WatchPage;