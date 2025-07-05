import React from 'react'
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";

export default function ClientReviews() {
  return (
    <div className='flex flex-row  mx-20 border-t-2 border-gray-300 pt-15 pb-15'>
      <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" alt="Client 1" className='w-25 h-25 rounded-xl' />
      
      <div className='flex flex-col ml-8' >
        <div className='text-xl font-bold text-gray-600'>K.P.James web</div>
        <div className='flex flex-row gap-2 mt-2'>
            <div className='text-md font-semibold text-gray-500' >Total Reviews : </div>
            <div className='text-md text-gray-700 ' >7</div>
        </div>
      </div>

        <div className='flex flex-col ml-25'>
          <div className='flex flex-row gap-1 items-center'>
            
              <TiStarFullOutline className='text-yellow-400 text-lg' />
              <TiStarFullOutline className='text-yellow-400 text-lg' />
              <TiStarFullOutline className='text-yellow-400 text-lg' /> 
              <TiStarFullOutline className='text-yellow-400 text-lg' />
              <TiStarHalfOutline className='text-yellow-400 text-lg' />
                <div className='flex flex-row items-center text-md font-semibold text-gray-600 ml-4'>Date: <div className='text-md font-normal ml-2 '>2024/06/25</div></div>
          </div>

          <div className='text-md w-[600px] text-gray-600 mt-3 text-left'>
            I ordered the strawberry cake for my sister’s birthday, and it was honestly the highlight of the party! The sponge was light and fluffy, the cream was perfectly whipped, not too sweet and the fresh strawberries on top tasted super fresh and juicy.
          </div>
            
        </div>

    </div>
  )
}
