import React from 'react'
import { CiCirclePlus } from "react-icons/ci";

export default function Category(props) {
  return (
    <div className='relative flex flex-col items-center justify-center h-30 w-70 bg-red-500 rounded-xl shadow-lg mt-5 p-10 bg-center bg-cover bg-no-repeat'
        style={{ backgroundImage: `url(${props.imageUrl})`}}
    >
        <div className="absolute inset-0 backdrop-blur-xs hover:backdrop-blur-md bg-white/10  rounded-xl cursor-pointer transition duration-300" ></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-2xl font-semibold cursor-pointer">
    {props.categoryName}
    <p className='text-3xl mt-2 '><CiCirclePlus/></p>
     
     </div>
   
    </div>
    
  )
}
