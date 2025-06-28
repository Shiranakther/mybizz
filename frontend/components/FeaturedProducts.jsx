import React from 'react'
import FeatureBox from './FeatureBox'

export default function FeaturedProducts() {
  return (
    <div className='flex flex-col justify-center items-center mt-10 mb-10'>
      <div className='mt-1 text-4xl font-bold text-gray-700'>Featured Products</div>
      <div className='text-2xl  text-gray-700 mt-4'>A collection of our finest cakes, crafted for your sweetest moments.</div>
      <div className='flex flex-row flex-wrap justify-center items-center pt-12 mb-10 gap-10'>
            <FeatureBox />
            <FeatureBox />
            <FeatureBox />
            <FeatureBox />
            <FeatureBox />
            <FeatureBox />
            <FeatureBox />
            <FeatureBox />
            
      </div>
      <button className='button4'>Explore More ...</button>
    </div> 
  )
}
