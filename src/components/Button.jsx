import React from 'react'

const Button = ({name}) => {
  return (
    <div className='bg-[#272727] rounded-lg inline-block text-center mr-3 lg:mx-2'>
        <button className='px-4 py-1.5 text-sm md:text-md lg:text-2xl lg:px-6 lg:py-2.5 whitespace-nowrap'> {name}</button>
    </div>
  )
}

export default Button;