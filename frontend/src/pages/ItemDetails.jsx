import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { GiCupcake } from "react-icons/gi";
import { BsCartCheckFill } from "react-icons/bs";
import ClientReviews from '../../components/ClientReviews';
import ItemDetailsComponent from '../../components/ItemDetailsComponent';


export default function ItemDetails() {

  const { id } = useParams(); 
  const [product, setProduct] = useState(null);
  console.log(`my id id ${id}`);

  useEffect(() => {
      const fetchProduct = async () => {
        const response = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(response.data);
      };
      
      fetchProduct();
      console.log(product)
    }, [id]);
 
  return (
    <div className='flex flex-col'>
      <Header />


      

        {product && (
        <ItemDetailsComponent
          itemName={product.productName}
          imageUrl={product.productImage}
          shortDescription={product.productIntroduction}
          description={product.productDescription}
          discountedPrice={product.discountedPrice}
        />
      )}



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
