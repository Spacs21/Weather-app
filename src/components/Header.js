import React from 'react'
import { TbReload } from "react-icons/tb";
import { IoIosStarOutline } from "react-icons/io";
import { MdPushPin } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { FiMoreHorizontal } from "react-icons/fi";

const Header = () => {
  return (
    <div className='bg-[rgba(75,0,130,0.8)]'>
        <div className='container mx-auto px-5'>
            <div className='w-full flex justify-between h-[60px] text-white items-center'>
                <h1 className='text-2xl font-semibold'>Bekzod</h1>
                <ul className='flex gap-5 text-2xl items-center'>
                    <li className='hover:bg-purple-500 p-4 duration-200 cursor-pointer'><TbReload/></li>
                    <li className='hover:bg-purple-500 p-4 duration-200 cursor-pointer'><IoIosStarOutline/></li>
                    <li className='hover:bg-purple-500 p-4 duration-200 cursor-pointer rotate-[90deg]'><MdPushPin/></li>
                    <li className='hover:bg-purple-500 p-4 duration-200 cursor-pointer'><FiSun/></li>
                    <li className='hover:bg-purple-500 p-4 duration-200 cursor-pointer'><FiMoreHorizontal/></li>
                    <input type="text" placeholder='Search...' className='w-[110px] hover:w-[160px] text-[16px] px-4  text-purple-900 placeholder-purple-400 bg-purple-50 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-300 ease-in-out'/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header