import React from 'react'
import { useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaDropbox } from "react-icons/fa6";
import { IoDuplicateOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { Link } from 'react-router-dom';

export default function Slidebar() {

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

    const [isOpen2, setIsOpen2] = useState(false);
  const toggleMenu2 = () => setIsOpen2(!isOpen2);

    const [isOpen3, setIsOpen3] = useState(false)
  const toggleMenu3 = () => setIsOpen3(!isOpen3);

    const [isOpen4, setIsOpen4] = useState(false);
  const toggleMenu4 = () => setIsOpen4(!isOpen4);


  return (
    <div className='flex flex-col  text-white text-xl fixed left-0 w-[300px] h-full py-4 px-2' style={{background:'var(--color-roce-100)'}}>
      <div className=' flex flex-row  text-2xl font-bold mx-4 items-center mt-5 mb-5 '><RxHamburgerMenu className='mr-8 text-3xl'/> CakeHaven</div>

      <div className='flex flex-col gap-5 mt-5 bg-white/20 rounded-r-full hover:scale-102'>
        <div className='flex flex-row gap-3 items-center mx-4 py-3 cursor-pointer'>
            <LuLayoutDashboard className='text-2xl mr-6 font-bold'/>
            <div className='text-lg'>Dashboard</div>
        </div>

      </div>

       <div className='flex flex-col  mt-5 hover:rounded-xl hover:bg-white/80 hover:text-gray-800  ' onClick={toggleMenu} >
        <div className='flex flex-row gap-3 items-center mx-4 py-3 cursor-pointer'>
            <FaDropbox  className='text-2xl mr-6 font-bold'/>
            <div className='text-lg'>Items</div>
        </div>
        {isOpen && (
        <ul className=" text-left pl-17 text-sm">
         <Link to='/create-item'><li className="hover:font-bold p-2 rounded cursor-pointer">Create Item</li></Link> 
          <li className="hover:font-bold  p-2 rounded cursor-pointer">Manage Items</li>
        </ul>
      )}

      </div>

      <div className='flex flex-col  mt-5 hover:rounded-xl hover:bg-white/80 hover:text-gray-800  ' onClick={toggleMenu2} >
        <div className='flex flex-row gap-3 items-center mx-4 py-3 cursor-pointer'>
            <IoDuplicateOutline className='text-2xl mr-6 font-bold'/>
            <div className='text-lg'>Category</div>
        </div>
        {isOpen2 && (
        <ul className=" text-left pl-17 text-sm">
          <li className="hover:font-bold p-2 rounded cursor-pointer">Create Category</li>
          <li className="hover:font-bold  p-2 rounded cursor-pointer">Manage Category</li>
        </ul>
      )}

      </div>

      <div className='flex flex-col  mt-5 hover:rounded-xl hover:bg-white/80 hover:text-gray-800  ' onClick={toggleMenu3} >
        <div className='flex flex-row gap-3 items-center mx-4 py-3 cursor-pointer'>
            <LuLayoutDashboard className='text-2xl mr-6 font-bold'/>
            <div className='text-lg'>Orders</div>
        </div>
        {isOpen3 && (
        <ul className=" text-left pl-17 text-sm">
          <li className="hover:font-bold p-2 rounded cursor-pointer">New Orders</li>
          <li className="hover:font-bold  p-2 rounded cursor-pointer">Pending Orders</li>
          <li className="hover:font-bold  p-2 rounded cursor-pointer">Delivered Orders</li>
          <li className="hover:font-bold  p-2 rounded cursor-pointer">Disputed Orders</li>
        </ul>
      )}

      </div>

      <div className='flex flex-col  mt-5 hover:rounded-xl hover:bg-white/80 hover:text-gray-800  ' onClick={toggleMenu4} >
        <div className='flex flex-row gap-3 items-center mx-4 py-3 cursor-pointer'>
            <IoDocumentTextOutline className='text-2xl mr-6 font-bold'/>
            <div className='text-lg'>Reports</div>
        </div>
        {isOpen4 && (
        <ul className=" text-left pl-17 text-sm">
          <li className="hover:font-bold p-2 rounded cursor-pointer">Customer Report</li>
          <li className="hover:font-bold  p-2 rounded cursor-pointer">Item Report</li>
          <li className="hover:font-bold  p-2 rounded cursor-pointer">Sales Report</li>
        </ul>
      )}

      </div>

      <div className='flex flex-col gap-5 mt-20  rounded-r-full hover:scale-102'>
        <div className='flex flex-row gap-3 items-center mx-4 py-3 cursor-pointer '>
            <FiLogOut className='text-2xl mr-6 font-bold'/>
            <div className='text-lg'>logout</div>
        </div>

      </div>

      
        
    </div>

    
  )
}
