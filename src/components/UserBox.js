import React from 'react'
import UserImg from '../images/UserImg.JPG'
const UserBox = () => {
  return (
    <div className='flex justify-between items-center mb-6 mt-6 rounded-full cursor-pointer py-2 px-4 hover:bg-primary-light userbox'>
        <img src={UserImg} alt='Profile' className='w-11 h-11 rounded-full userbox-img' />
        <div className="flex flex-col userbox-text">
            <span className='font-semibold text-black text-md'>Umar Hojimirzayev</span>
            <span className="text-gray-dark text-sm">@khojimirzayev</span>
        </div>
        <div className='flex space-x-1 userbox-text'>
            <div className='w-1 h-1 rounded-full bg-gray-700' />
            <div className='w-1 h-1 rounded-full bg-gray-700' />
            <div className='w-1 h-1 rounded-full bg-gray-700' />
        </div>
    </div>
  )
}

export default UserBox