import { useEffect, useState } from "react";
import {GOOGLE_API_KEY} from "../utils/constants"

const useChannelIcon = (channelId) => {

    const [iconUrl, setIconUrl] = useState('');

    useEffect(() => {
        const fetchIcon = async () => {
            const data = await fetch('https://www.googleapis.com/youtube/v3/channels?part=snippet&id='+channelId +'&key='+GOOGLE_API_KEY );
            const json = await data.json();
            const url = json?.items?.[0]?.snippet?.thumbnails?.default?.url;
            setIconUrl(url);
        }

        fetchIcon();
    
    },[channelId]);

  
    return iconUrl;
}

export default useChannelIcon;