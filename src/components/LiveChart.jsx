import React, { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import generateRandomNames, { makeRandomMessage } from "../utils/helper";

const LiveChart = () => {

     const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessage = useSelector((store) => store.chat.messages);

    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name:generateRandomNames(),
                message:makeRandomMessage(25) ,
            }))

        }, 2500);

      return () => clearInterval(i);
    },[]); 

  return (
    <>
        <div className='h-full w-full mb-5  md:ml-2 ml-1 lg:-mt-20 -mt-12 md:mb-5 overflow-y-scroll flex flex-col-reverse '>
            {chatMessage.map((chat, index) => (
            <ChatMessage key={index} name={chat.name} message={chat.message} />
            ))}
        </div>

<form
  className="w-full p-2 -mt-6 lg:-mt-5 lg:py-4 flex items-center gap-2 border-t border-gray-600 bg-[#0f0f0f]"
  onSubmit={(e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: "Kadi Uday",
        message: liveMessage,
      })
    );
    setLiveMessage("");
  }}
>
  <input
    type="text"
    placeholder="Type your message..."
    value={liveMessage}
    onChange={(e) => setLiveMessage(e.target.value)}
    className="flex-grow px-3 py-2 md:-mt-1 rounded-full bg-[#121212] text-white placeholder-gray-400 border border-[#303030] focus:outline-none focus:ring-1 focus:ring-[#3ea6ff] text-sm md:text-base lg:text-2xl lg:px-5 lg:py-3"
  />
  <button
    type="submit"
    className="px-4 py-2 md:-mt-1 bg-[#3ea6ff] hover:bg-[#65b6ff] text-white rounded-full text-sm md:text-base font-medium lg:text-xl"
  >
    Send
  </button>
</form>

    </>
  )
}

export default LiveChart;
