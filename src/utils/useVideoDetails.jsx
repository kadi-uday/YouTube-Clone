import { useLocation, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const useVideoDetails = () => {
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    if (location.state?.video) {
      setVideoInfo(location.state.video); 
    }
  }, [location]);

  return { videoId, videoInfo };
};

export default useVideoDetails;
