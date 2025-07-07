import React from 'react'
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import { useEffect } from 'react';


export default function CartItem() {

    const [itemCount,setItemCount] = useState(1);

    const increaseItemCount = ()=>{
      setItemCount(itemCount+1);
    }
    const decreaseItemCount = ()=>{
      setItemCount((prev) => (prev > 1 ? prev - 1 : 1));
    }

   useEffect(()=>{

   },[itemCount])




  return (
    <div className='flex flex-row px-2 py-6 items-center mx-20  border-b-2 border-gray-400 mb-6 '>
      <img src='https://flouringkitchen.com/wp-content/uploads/2023/07/BW1A4089-2.jpg' alt='cake' className='h-[100px] w-[100px] rounded-full border-2 border-white shadow-md'></img>
      <div className='flex flex-col gap-1 text-left ml-4'>
          <div className='text-md font-semibold text-gray-800 ml-8'>Strawberry Cake</div>
          <div className='text-sm font-semibold text-gray-600 ml-8'>#132652</div>
      </div>

      <div className='flex flex-row gap-6 px-4 py-1  rounded-4xl items-center text-gray-800 border-2 border-gray-800 mx-24'>
        <button className='text-sm cursor-pointer hover:scale-110' onClick={decreaseItemCount}><FaMinus/></button>
       
        <input
            type="number"
            value={itemCount}
            min={1}
            onChange={(e) => {
              const value = Math.max(1, parseInt(e.target.value) || 1);
              setItemCount(value);
            }}
            className="text-lg w-12 text-center outline-none no-spinner"
          />
        <button className='text-sm cursor-pointer hover:scale-110'onClick={increaseItemCount} ><FaPlus/></button>
      </div>

      <div className='text-xl text-gray-600 font-semibold mx-15'>
        Rs: 1200.00
      </div>

      <div className='text-xl text-gray-600 font-semibold mx-15 cursor-pointer hover:scale-120'><AiOutlineClose /></div>
      
    </div>
  )
}
