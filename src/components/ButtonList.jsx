import React from 'react'
import Button from './Button';
import { list } from '../utils/constants';

const ButtonList = () => {

  return (
    <div className=' bg-[#0f0f0f] mt-20 px-4 lg:px-4 lg:mt-28 overflow-x-auto whitespace-nowrap scrollbar-hide'>

        {list.map((items , index) => (
        <Button key={index} name={items} />
      ))}
      
    </div>
  )
}

export default ButtonList;