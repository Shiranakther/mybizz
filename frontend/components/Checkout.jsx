import React from 'react'

export default function Checkout() {
  return (
    <div className='flex flex-col bg-gray-800 px-10 py-10 text-white gap-8 rounded-xl'>
      <div className='flex flex-row justify-between items-center text-left'>
        <div className='text-lg font-semibold'>Total Items</div>
        <div className='text-xl font-bold'>3   </div>
      </div>

      <div className='flex flex-row justify-between items-center text-left'>
        <div className='text-lg font-semibold'>Total</div>
        <div className='text-xl font-bold'>Rs:3600.00</div>
      </div>



      <div className='flex flex-row justify-between items-center text-left gap-0 text-gray-800 '>
        <input type='text' placeholder='Promo Code' className='bg-white h-[35px] w-[190px] rounded-lg  px-5 outline-none ' ></input>
        <button className='h-[35px] w-[120px] text-red-500 font-semibold border-2 rounded-lg hover:bg-red-400 hover:text-white cursor-pointer transition-transform duration-500 [transition-timing-function:var(--ease-03)] hover:scale-105'>Apply</button>
      </div>

      <div className='flex flex-row justify-between items-center text-left mt-8 '>
        <div className='text-lg font-semibold'>Discount</div>
        <div className='text-xl font-bold'>Rs:0</div>
      </div>

        <div className='flex flex-row justify-between items-center text-left mt-4 border-t-2 border-white py-3 border-b-2 ' style={{ borderStyle: 'solid none solid none' }}>
        <div className='text-xl font-semibold'>Subtotal</div>
        <div className='text-2xl font-bold'>Rs:3600.00</div>
      </div>
        <div>
                <button className='bg-white text-red-500 w-[320px] px-4 py-2 text-lg rounded-lg font-semibold cursor-pointer hover:bg-red-400 hover:text-white mt-5 transition-transform duration-500 [transition-timing-function:var(--ease-03)] hover:scale-105'>Checkout</button>
        </div>
      

    </div>
  )
}
