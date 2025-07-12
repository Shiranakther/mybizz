import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../components/Header'
import Landing from '../../components/Landing'
import Category from '../../components/Category'
import FeaturedProducts from '../../components/FeaturedProducts'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'
import { MdCake } from 'react-icons/md';

export default function Home() {
  const [categoryData,setCategoryData] = useState([])


  const fetchCategoryData = async()=>{
    
    const response = await axios.get('http://localhost:5000/api/categories');
    const data = response.data
    setCategoryData(data);

  }

  useEffect(()=>{
    fetchCategoryData();
  },[])

  return (
    <div>
      <Header />
      <Landing />
      
      <div className='flex flex-col justify-center items-center'  style={{ background: '#fff7ed' }}>
        <MdCake size={45} style={{ color: 'var(--color-roce-100)', }} className='mt-10' />
        <div className='mt-5 text-4xl font-bold text-gray-700  '  >Sweet Categories</div>
        <div className='text-2xl  text-gray-700 mt-4'>Explore our delicious cake categories</div>
      </div>

      
      <div className='flex flex-row justify-center items-center pl-40 pr-40' style={{ background: '#fff7ed' }}>
    <div className='flex flex-row justify-evenly items-center pt-12 mb-10 flex-wrap pb-12  flex-start' 
     style={{ background: '#fff7ed' }}
     >
       {categoryData.map((category, index) => (
        <Category 
          key={index}
          categoryName={category.categoryName}
          imageUrl={category.categoryImage}
         />
      ))}



      
    </div>
      </div>
      <FeaturedProducts />
      <Newsletter/>
      <Footer />
  
    </div>
  )
}
