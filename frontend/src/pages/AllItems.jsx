import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FeatureBox from '../../components/FeatureBox'


export default function AllItems() {
  return (
    <div className='flex flex-col pt-22'>
      <Header />

       <div className='flex flex-col justify-center items-center'  >
                
                <div className='mt-5 text-4xl font-bold text-gray-700 mt-10'  >Sweet Selections</div>
                <div className='text-2xl  text-gray-700 mt-4 '>Explore every cake we bake  crafted with love and premium ingredients. </div>
        </div>

      <div className='flex flex-col sm:flex-row w-full items-center gap-4 p-4  rounded-lg  mt-8  '>

       
        
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
        <input 
        
          type='text' 
          placeholder='Chocolate cake' 
          className='flex-1 p-2 border border-red-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 transition duration-200 bg-white ml-8 '
        />
        <button 
          className='bg-red-400 text-white px-12 py-2 rounded-lg font-bold hover:scale-105 transition duration-300 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 cursor-pointer'
        >
          Search
        </button>
      </div>
      <div className='flex flex-row flex-wrap gap-5 items-center justify-flex-start px-6 py-10 mb-10'>
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
          <FeatureBox />
      </div>
      <Footer />
    </div>
  )
}
