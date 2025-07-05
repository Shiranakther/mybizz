import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { GiCupcake } from "react-icons/gi";
import { BsCartCheckFill } from "react-icons/bs";
import ClientReviews from '../../components/ClientReviews';

export default function ItemDetails() {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='   mt-35   flex flex-row justify-between items-center mx-20'>
        <img src='https://flouringkitchen.com/wp-content/uploads/2023/07/BW1A4089-2.jpg' alt='Item' className='w-100 border border-white shadow-xl rounded-xl' />
        <div className='flex flex-col items-start justify-center ml-10'>
          <div className='text-gray-600 font-bold text-3xl pb-3 '>Fresh Strawberry Delight Cake</div>
          <div className='text-gray-600  text-lg pb-5  '>Light and fluffy vanilla sponge layered with real strawberries and whipped cream.</div>
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
          
          <div className='text-left bg-red-100/30 px-4 py-4 border border-red-200 rounded-xl text-gray-700 mb-8' >Our Fresh Strawberry Delight Cake is a summer favorite! Made with moist vanilla sponge, layered with freshly chopped strawberries and topped with soft whipped cream. Perfect for birthdays, anniversaries, or just treating yourself. Available in eggless and regular options.</div>
          <div className='flex flex-row justify-center font-bold text-red-500 '><div className='text-2xl'>RS:1600.00</div> <div className='   ml-3 text-gray-800 text-sm font-normal mt-1.5 font-semibold '>per 1 Kg</div></div>

          <div className='flex flex-row gap-10 mt-7 items-center'>
            <button className='px-8 py-2 items-center bg-red-400 rounded-lg text-white font-semibold cursor-pointer hover:scale-105 border-2 border-red-400'>Buy Now </button>
            <button className='bg-white px-6 py-2 flex flex-row border-2 text-red-400 border-red-400  gap-6 items-center rounded-lg font-semibold hover:scale-105 cursor-pointer hover:text-white hover:bg-red-400 '>Add To Cart <BsCartCheckFill className='text-2xl' /></button>
          </div>
          
        </div>
      </div>
      <div className='flex flex-col mx-20 my-15'>
        <div className='flex flex-row justify-between items-center'>
          <div className='text-gray-800 text-3xl font-bold '>Reviews</div>
          <div className='px-3 py-2  border-2 border-gray-200 shadow-xs rounded-xl font-semibold text-gray-800 text-sm'>March 2021 - February 2022</div>
        </div>

        {/* review quantity section */}

        <div className='flex flex-row justify-between items-start mt-13'>
          <div className='flex flex-col items-start'>
            <div className='text-gray-700 font-semibold text-lg'>Total Reviews</div>
            <div className='text-gray-900 mt-3 font-bold text-3xl'>320</div>
          </div>

          <div className='h-30 w-[2px] bg-gray-200'></div>

           <div className='flex flex-col items-start '>
            <div className='text-gray-700 font-semibold text-lg'>Average Rating</div>
            <div className='flex flex-row items-center gap-1 text-gray-900 mt-3 font-bold text-3xl'>
              <div className='mr-3'>4.5</div>
              <TiStarFullOutline className='text-yellow-400 text-xl ' />
              <TiStarFullOutline className='text-yellow-400 text-xl' />
              <TiStarFullOutline className='text-yellow-400 text-xl' />
              <TiStarFullOutline className='text-yellow-400 text-xl' />
              <TiStarHalfOutline className='text-yellow-400 text-xl' />
            </div>
          </div>

          <div className='h-30 w-[2px] bg-gray-200'></div>

          <div className='flex flex-col '>
           <div className='flex flex-row  items-center '>
             <TiStarFullOutline  className='text-gray-400 text-xs'/>
             <div className='font-semibold ml-2 text-md mr-3'>5</div>
             <div className='w-[180px] h-[6px] bg-green-300 rounded-xl'></div>
             <div className='font-semibold ml-4 text-md '>45</div>
           </div>

            <div className='flex flex-row  items-center '>
             <TiStarFullOutline  className='text-gray-400 text-xs'/>
             <div className='font-semibold ml-2 text-md mr-3'>4</div>
             <div className='w-[140px] h-[6px] bg-purple-300 rounded-xl'></div>
             <div className='font-semibold ml-4 text-md '>35</div>
           </div>

            <div className='flex flex-row  items-center '>
             <TiStarFullOutline  className='text-gray-400 text-xs'/>
             <div className='font-semibold ml-2 text-md mr-3'>3</div>
             <div className='w-[100px] h-[6px] bg-orange-300 rounded-xl'></div>
             <div className='font-semibold ml-4 text-md '>20</div>
           </div>

            <div className='flex flex-row  items-center '>
             <TiStarFullOutline  className='text-gray-400 text-xs'/>
             <div className='font-semibold ml-2 text-md mr-3'>2</div>
             <div className='w-[40px] h-[6px] bg-blue-300 rounded-xl'></div>
             <div className='font-semibold ml-4 text-md '>10</div>
           </div>

            <div className='flex flex-row  items-center '>
             <TiStarFullOutline  className='text-gray-400 text-xs'/>
             <div className='font-semibold ml-2 text-md mr-3'>1</div>
             <div className='w-[15px] h-[6px] bg-red-300 rounded-xl'></div>
             <div className='font-semibold ml-4 text-md '>2</div>
           </div>

          </div>
        </div>


      </div>

      <div className='flex flex-col'>
      <ClientReviews/>
      <ClientReviews/>
      <ClientReviews/>
      </div>

      <div>
        <button className='px-8 py-2 bg-red-400 rounded-xl items-center cursor-pointer text-white font-semibold hover:scale-105'>Load More</button>
      </div>
      
      
      <Footer/>
    </div>
  )
}
