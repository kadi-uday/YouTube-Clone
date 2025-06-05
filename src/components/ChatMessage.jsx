import React from 'react'

const ChatMessage = ({name, message}) => {
  return (
    <div className='flex items-center shadow-md  py-2.5 md:px-0 md:p-2 px-1 '>
        <img className='h-6 md:h-10 lg:h-16' alt='user-icon' src='/user-icon.png' />
        <span className='font-bold px-2 text-gray-200 lg:text-2xl mr-2'>{name}</span>
        <span className='text-gray-300 lg:text-2xl lg:ml-2'>{message}</span>
    </div>
  )
}

export default ChatMessage;