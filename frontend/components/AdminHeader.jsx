import React from 'react'
import { IoNotificationsOutline } from "react-icons/io5";
import { LuMessageSquareMore } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa6";
import {Link} from 'react-router-dom';
import { LuSearch } from "react-icons/lu";

export default function AdminHeader() {
  return (
     <header className="flex flex-row justify-between  items-center  bg-white  border-b-4 shadow-md pt-4 pb-4 px-8 w-full"
        style={{ background:'#FDF2F8' ,borderBottomColor: '#FCD0E3' }}
    >
        <div className='flex flex-row items-center bg-white h-[40px] w-[350px] px-2  rounded-xl border-2 border-red-200  '>
                <LuSearch className='text-gray-700 text-2xl'/>
                <input type="text" className=' h-full rounded-lg mr-2  px-2 outline-none w-full'  placeholder='Search'/>
                
            </div>
        
        <div className='flex flex-row items-center gap-7 mr-10'>
            
            <button className='button1 text-red-400'><IoNotificationsOutline /></button >
            <button className='button1 text-red-400'><LuMessageSquareMore   /></button>
            <button className='button1 text-red-400'><FaRegUser /></button>
        </div>
    </header>
  )
}
