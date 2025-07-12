import React from 'react'
import { FaStar } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function FeatureBox(props) {
  return (
    <div className='flex flex-col items-center font-bold h-105 w-70  rounded-xl shadow-2xl border-1 border-red-300 hover:scale-105 transition duration-300 ease-in-out cursor-pointer'
     style={{ background: '#fff7ed' }}
     onClick={props.onClick}
    >
      <img src={props.imageUrl} alt='Cake' className='h-60 w-full object-cover rounded-t-xl' />
      <div className='flex flex-row text-left text-gray-800 text-lg mt-2 w-full pl-5'>{props.productName}</div>
      <div className=' w-full pl-5 text-left text-gray-700 font-normal  '>{props.productCategory}</div>
      <div className='flex flex-row justify-between items-center w-full pl-5 pr-6    '>
        <div className='flex flex-row justify-center items-center mt-4 '>
            <FaStar className='text-yellow-400 mr-2 text-xl   '/> {props.productRating}
        </div>
        <div className='flex flex-row items-center gap-2 justify-center pt-3'>
          {props.price && (
      <div className='text-gray-500 text-xl line-through font-normal'  style={{ textDecorationThickness: '2px' }}>
        Rs: {props.price}.00
        </div>
      )}

      {props.discountedPrice && (
        <div className='text-red-500 text-xl'>
          Rs: {props.discountedPrice}.00
        </div>
      )}

        </div>
        

      </div>
      <button className='button3 -'>
        <AiOutlineShoppingCart className='text-xl' /> Add To Cart
      </button>
    </div>
  )
}
