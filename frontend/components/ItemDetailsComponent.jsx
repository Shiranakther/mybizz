import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { GiCupcake } from "react-icons/gi";
import { BsCartCheckFill } from "react-icons/bs";

export default function ItemDetailsComponent(props) {
  return (
    <div>
              <div className='   mt-35   flex flex-row justify-between items-center mx-20' >
                <img src={props.imageUrl} alt='Item' className='w-100 border border-white shadow-xl rounded-xl' />
                <div className='flex flex-col items-start justify-center ml-10'>
                  <div className='text-gray-600 font-bold text-3xl pb-3 '>{props.itemName}</div>
                  <div className='text-gray-600  text-lg pb-5  '>{props.shortDescription}</div>
                  <div className='flex flex-row gap-2 text-yellow-300 text-lg font-semibold items-center mb-6'>
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarFullOutline />
                      <TiStarHalfOutline />
        
                      <div className='text-gray-600 font-semibold text-sm ml-2 text-decoration-line: underline cursor-pointer hover:scale-108'> 135 Reviews</div>
                      <div className=' flex flex-row items-center gap-3 text-red-500 font-semibold text-sm ml-10 '> 
                        <div><GiCupcake className='text-lg' /></div>
                        <div>180 cakes Sold</div>
                      </div>
                  </div>
                  
                  <div className='text-left bg-red-100/30 px-4 py-4 border border-red-200 rounded-xl text-gray-700 mb-8' >{props.description}</div>
                  <div className='flex flex-row justify-center font-bold text-red-500 '><div className='text-2xl'>Rs: {props.discountedPrice}.00</div> <div className='   ml-3 text-gray-800 text-sm font-normal mt-1.5 font-semibold '>per 1 Kg</div></div>
        
                  <div className='flex flex-row gap-10 mt-7 items-center'>
                    <button className='px-8 py-2 items-center bg-red-400 rounded-lg text-white font-semibold cursor-pointer hover:scale-105 border-2 border-red-400'>Buy Now </button>
                    <button className='bg-white px-6 py-2 flex flex-row border-2 text-red-400 border-red-400  gap-6 items-center rounded-lg font-semibold hover:scale-105 cursor-pointer hover:text-white hover:bg-red-400 '>Add To Cart <BsCartCheckFill className='text-2xl' /></button>
                  </div>
                  
                </div>
              </div>
    </div>
  )
}
