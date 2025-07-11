import React from 'react'
import { useState } from 'react';




export default function Items() {

  const [focusedField, setFocusedField] = useState('');
  const [itemName, setItemName] = useState('');
  const [secondField, setSecondField] = useState('');

  const [tags, setTags] = useState([]);
  const [input, setInput] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      e.preventDefault(); // prevent form submission
      if (!tags.includes(input.trim())) {
        setTags([...tags, input.trim()]);
      }
      setInput('');
    }
  };

  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, i) => i !== indexToRemove));
  };

  return (
    <div className='flex flex-col'>
        <div className='text-gray-600 font-semibold text-3xl mt-8 text-left pl-8 mb-4'>Create Item</div>

        <div className='flex flex-col px-8 py-8 gap-10'>
          <div className='flex flex-row items-center gap-10'>

          <input type="text" className=' bg-gray-100/20 border-2 border-gray-400 w-[350px] h-[40px] rounded-xl shadow-sm px-2 outline-none ' placeholder='Product Name'/>
       
          <select name="Product Category" id="productCategory" className='bg-gray-100/20 border-2 border-gray-400 w-[350px] h-[40px] rounded-xl shadow-sm px-2 outline-none text-gray-600'>
          <option value="" disabled selected>Category</option>
          <option value="">Celebration Cakes</option>
          <option value="">Holiday Cakes</option>
          <option value="">Cultural Cakes</option>
          <option value="">Milestone Cakes</option>
          
          </select>

          <select name="Sub Category" id="productCategory" className='bg-gray-100/20 border-2 border-gray-400 w-[350px] h-[40px] rounded-xl shadow-sm px-2 outline-none text-gray-600'>
          <option value="" disabled selected>Sub Category</option>
          <option value="">Wedding Cake</option>
          <option value="">Birthday Cakes</option>
          <option value="">Christmas Cake </option>
          <option value="">Milestone Cakes</option>
          
          </select>
         
          </div>
          <div className='flex flex-row items-center gap-10'>
            <input type='number' min={0} placeholder='Product Price' className='bg-gray-100/20 border-2 border-gray-400 w-[350px] h-[40px] rounded-xl shadow-sm px-2 outline-none text-gray-600 no-spinner'></input>
            <input type='number' min={0} placeholder='Discount Amount' className='bg-gray-100/20 border-2 border-gray-400 w-[350px] h-[40px] rounded-xl shadow-sm px-2 outline-none text-gray-600 no-spinner'></input>
            <input type='number' min={0} placeholder='Discounted Price ' className='bg-gray-100/20 border-2 border-gray-400 w-[350px] h-[40px] rounded-xl shadow-sm px-2 outline-none text-gray-600 no-spinner'></input>
          </div>

          <textarea name="" id="" className='bg-gray-100/20 border-2 border-gray-400  rounded-xl shadow-sm px-2 outline-none text-gray-600 py-2 mr-10' placeholder='Description'></textarea>
         
         
          <div className='mr-10  '>
            <input 
            type="file" 
            id="fileInput"
            className="absolute w-full h-full opacity-0 cursor-pointer"
            accept="image/*"
          />
          <label 
            htmlFor="fileInput"
            className="flex items-center justify-center gap-3 bg-white border-2 border-dashed border-gray-300 hover:border-blue-500 rounded-xl px-6 py-4 transition-all duration-300 cursor-pointer hover:bg-blue-50 group"
          >
            <div className="flex items-center gap-3 ">
              <div className="w-8 h-8 bg-blue-100 group-hover:bg-blue-200 rounded-full flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-gray-700 group-hover:text-blue-600">Upload Image</p>
                <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
              </div>
            </div>
          </label>

          </div>

          <div className=" mr-10">
          {/* Tags Display */}
          <div className="flex flex-wrap gap-2 mb-2">
            {tags.map((tag, index) => (
              <div
                key={index}
                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full flex items-center gap-2"
              >
                <span>{tag}</span>
                <button
                  onClick={() => removeTag(index)}
                  className="text-blue-500 hover:text-red-500 font-bold"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>

          {/* Input Field */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Tags"
            className="bg-gray-100/20 border-2 border-gray-400 w-full h-[40px] rounded-xl shadow-sm px-2 outline-none"
          />
        </div>

          <select name="Sub Category" id="Availability" className='bg-gray-100/20 border-2 border-gray-400 w-[350px] h-[40px] rounded-xl shadow-sm px-2 outline-none text-gray-600'>
          <option value="">Available</option>
          <option value="">Not Available</option>
          
          </select>

          <button className='button4 bg-red-100'>Add Product</button>
          

        </div>


    
    
    </div>
  )
}
