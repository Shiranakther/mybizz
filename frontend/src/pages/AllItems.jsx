import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FeatureBox from '../../components/FeatureBox'
import { LuSearch } from "react-icons/lu";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



export default function AllItems() {

  const[itemData,setItemData] = useState([]);
  const navigate = useNavigate();

  
    const fetchItemData = async()=>{
      const response = await axios.get('http://localhost:5000/api/products');
      setItemData(response.data);
      console.log(response.data);
    }
  
    useEffect(()=>{
      fetchItemData();
    },[])


  return (
    <div className='flex flex-col pt-22'>
      <Header />

       <div className='flex flex-col justify-center items-center'  >
                
                <div className='mt-5 text-4xl font-bold text-gray-700 mt-10'  >Sweet Selections</div>
                <div className='text-2xl  text-gray-700 mt-4 '>Explore every cake we bake  crafted with love and premium ingredients. </div>
        </div>

      <div className='flex flex-col sm:flex-row w-full items-center  rounded-lg  mt-8 mx-15 '>

       
        
        <label htmlFor="price" className='text-lg  text-gray-600 mr-2 ml-6 font-bold'>Search By Category :</label>
        <select 
          name="category" 
          className='p-2 border border-gray-300 rounded-md outline-none  bg-white min-w-[180px] bg-red-400 text-gray-600'
        >
          <option value="">Select Category</option>
          <option value="category1">Category1</option>
          <option value="category2">Category2</option>
        </select>
        <div className='flex flex-col sm:flex-row items-center gap-2 ml-15'>
          <label htmlFor="price" className='text-lg font-bold text-gray-600 mr-4'>Sort by Price :</label>
          <select 
            name="price" 
            className='p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 bg-white min-w-[120px] mr-7 text-gray-600'
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          <input 
            type="text" 
            placeholder='Min' 
            className='w-25 p-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 mr-6 bg-white'
          />
          <input 
            type="text" 
            placeholder='Max' 
            className='w-25 p-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 bg-white'
          />
        </div>
        <div className='flex flex-row items-center ml-8  px-4 py-2 border-2 border-red-400 rounded-xl'>
          <LuSearch className='text-red-400 font-bold text-xl'/>

          <input 
          className='ml-2 h-full outline-none bg-transparent '
          type='text' 
          placeholder='Chocolate cake' 
        />

        </div>
        
        <button 
          className='bg-red-400 text-white px-8 py-2 rounded-lg font-bold hover:scale-105 transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer ml-8'
        >
          Search
        </button>
      </div>
      <div className='flex flex-row flex-wrap gap-15 items-center justify-between  py-10 my-8 mx-15'>
          {itemData.map((item, index) => (
                          <FeatureBox 
                            key={index}
                            onClick={() => navigate(`/item-details/${item._id}`)}
                            imageUrl={item.productImage}
                            productName={item.productName}
                            productCategory='Sub Category'
                            productRating={item.productRating}
                            productPrice={item.price}
                            discountedPrice={item.discountedPrice}
          
                            
                           />
                        ))}

      </div>
      <div className='flex flex-row justify-end gap-2 text-red-400 cursor-pointer pr-15'>
        <div className='flex flex-row h-5 w-5 border border-red-400 rounded-full px-4 py-4 items-center justify-center text-xl bg-red-400 text-white '>1</div>
        <div className='flex flex-row h-5 w-5 border border-red-400 rounded-full px-4 py-4 items-center justify-center text-xl hover:bg-red-400 hover:text-white '>2</div>
        <div className='flex flex-row h-5 w-5 border border-red-400 rounded-full px-4 py-4 items-center justify-center text-xl hover:bg-red-400 hover:text-white '>3</div>
        <div className='flex flex-row h-5 w-5 border border-red-400 rounded-full px-4 py-4 items-center justify-center text-xl hover:bg-red-400 hover:text-white '>4</div>
        <div className='flex flex-row h-5 w-5 border border-red-400 rounded-full px-4 py-4 items-center justify-center text-xl hover:bg-red-400 hover:text-white '>5</div>
        <div className='flex flex-row h-5 w-5 border border-red-400 rounded-full px-4 py-4 items-center justify-center text-xl hover:bg-red-400 hover:text-white '>6</div>
        <div className='flex flex-row h-5 w-5  rounded-full px-4 py-4 items-center justify-center text-xl  hover:bg-red-400 hover:text-white'> &#62;</div>
      </div>
      <Footer />
    </div>
  )
}
