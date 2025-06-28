import React from 'react'
import { FaStar } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function FeatureBox() {
  return (
    <div className='flex flex-col items-center font-bold h-105 w-70  rounded-xl shadow-2xl border-1 border-red-300 hover:scale-105 transition duration-300 ease-in-out cursor-pointer'
     style={{ background: '#fff7ed' }}
    >
      <img src='https://img.freepik.com/premium-photo/beautiful-cake-with-berries_23-2149236260.jpg' alt='Cake' className='h-60 w-full object-cover rounded-t-xl' />
      <div className='flex flex-row text-right text-gray-800 text-lg mt-2 w-full pl-5'>Birthday Cake1</div>
      <div className=' w-full pl-5 text-left text-gray-700 font-normal  '>Birthday Cakes</div>
      <div className='flex flex-row justify-between items-center w-full pl-5 pr-6    '>
        <div className='flex flex-row justify-center items-center mt-4 '>
            <FaStar className='text-yellow-400 mr-2 text-xl   '/> 4.9
        </div>
        <div className='text-red-500 text-2xl pt-2'> $54</div>

      </div>
      <button className='button3'>
        <AiOutlineShoppingCart className='text-xl' /> Add To Cart
      </button>
    </div>
  )
}
