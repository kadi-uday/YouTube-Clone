import React , {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/sideBarSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));

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
    </div>

  )
}

export default WatchPage;