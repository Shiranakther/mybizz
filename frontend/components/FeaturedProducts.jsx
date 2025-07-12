import React, { useEffect, useState } from 'react'
import FeatureBox from './FeatureBox'
import axios from 'axios';

export default function FeaturedProducts() {

  const[itemData,setItemData] = useState([]);

  const fetchItemData = async()=>{
    const response = await axios.get('http://localhost:5000/api/products');
    setItemData(response.data);
    console.log(response.data);
  }

  useEffect(()=>{
    fetchItemData();
  },[])

  return (
    <div className='flex flex-col justify-center items-center mt-10 mb-10'>
      <div className='mt-1 text-4xl font-bold text-gray-700'>Featured Products</div>
      <div className='text-2xl  text-gray-700 mt-4'>A collection of our finest cakes, crafted for your sweetest moments.</div>
      <div className='flex flex-row flex-wrap justify-center items-center pt-12 mb-10 gap-10'>

        {itemData.slice(0,8).map((item, index) => (
                <FeatureBox 
                  key={index}
                  imageUrl={item.productImage}
                  productName={item.productName}
                  productCategory='Sub Category'
                  productRating={item.productRating}
                  productPrice={item.price}
                  discountedPrice={item.discountedPrice}

                  
                 />
              ))}
            
      </div>
      <button className='button4'>Explore More ...</button>
    </div> 
  )
}
