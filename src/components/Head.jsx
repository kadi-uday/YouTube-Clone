import React from 'react'

const Head = () => {
  return (
    <div className='bg-[#0f0f0f] -my-2 pt-1 h-20 md:h-20 lg:h-28 grid grid-cols-12 items-center p-4 md:p-1 md:px-3 lg:p-1 lg:px-8 gap-5'>
        <div className='flex items-center col-span-3 gap-1'>
         <img className='h-6 md:h-8 lg:h-10 -mt-1' src="/menu-icon.png" alt="menu-icon" />
        <img className='h-20 w-full md:h-20 lg:h-32 lg:w-40' src='/youtube-logo.png' alt="youtube-logo" />
        </div>
        <div className='flex items-center col-span-7 justify-center -mr-6 ml-3 md:-ml-5 md:-mr-10 lg:-mt-3 '>
          <input type='text' placeholder='Search' className='w-5/6 px-4 py-1 bg-[#121212] border-[2px] md:border-[2px] border-[#414141] text-white lg:text-3xl lg:py-4 lg:border-[3px] lg:border-[#414141] rounded-l-full outline-none '></input>
          <button aria-label="Search" className=" p-2 bg-[#414141] rounded-r-full hover:bg-[#333333] transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-5 pr-2 lg:w-12 lg:h-[56px] text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"      strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"/>
            </svg>
          </button>
        </div>

        <div className='flex justify-end md:justify-center md:mr-10 lg:justify-end lg:mr-4 col-span-2 '>
          <img className=' h-8 w-8 md:h-10 md:w-10 rounded-full md:pl-[-20px] lg:h-16 lg:w-16 lg:-mt-5' src='/user-icon.png' alt='user-icon' />
        </div>
    </div>
  )
}

export default Head;