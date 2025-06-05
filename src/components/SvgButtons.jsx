import React from 'react'

const SvgButtons = () => {
  return (
    <div>
          <div className="flex flex-wrap gap-6 md:gap-4 md:mb-2 md:-mr-[10px] lg:-mr-0 lg:gap-8 lg:mt-3 ">
            <button className="flex w-16 px-5 items-center gap-1 py-1.5 lg:h-16 lg:w-28 lg:pl-9 bg-[#272727] hover:bg-[#363636] rounded-md lg:rounded-xl">
             <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-9 lg:h-9  text-white" viewBox="0 0 24 24" fill="white">
                <path d="M1 21h4V9H1v12zM23 10c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 2 7.59 8.59C7.22 8.95 7 9.45 7 10v10c0 1.1.9 2 2 2h7c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1z"/>
            </svg>
            </button>

            <button className="flex items-center gap-1 w-16 px-5 py-1.5 lg:h-16 hover:bg-[#363636] lg:w-28 lg:pl-9 bg-[#272727] rounded-md lg:rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-9 lg:h-9 text-white " viewBox="0 0 24 24" fill="white">
                <path d="M15 3H8c-.83 0-1.54.5-1.84 1.22L3.14 11.27c-.09.23-.14.47-.14.73v1c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 22l6.59-6.59c.37-.36.59-.86.59-1.41V5c0-1.1-.9-2-2-2zM20 3h-4v12h4V3z"/>
            </svg>

            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 bg-[#272727] hover:bg-[#363636] lg:text-xl rounded-md lg:rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-9 lg:h-9 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 12v1a3 3 0 003 3h9" /><polyline points="16 6 21 6 21 11" /><line x1="21" y1="6" x2="12" y2="15" /></svg>
                <span className='lg:text-2xl'>Share</span> 
            </button>
            <button className="flex items-center gap-1 px-[17px] py-1.5 bg-[#272727] hover:bg-[#363636] lg:text-xl rounded-md lg:rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lg:w-9 lg:h-9 text-white" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"> <path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" /></svg>
                <span className='lg:text-2xl'>Save</span>
            </button>
          </div>
    </div>

  )
}

export default SvgButtons;