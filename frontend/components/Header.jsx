import React from 'react'
import { FiHeart } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="flex flex-row justify-between  items-center  bg-white border-t-8 border-b-4 shadow-md pt-4 pb-4 px-8 fixed top-0 z-50 w-full"
        style={{ background:'#FDF2F8' , borderTopColor: '#F578AF',borderBottomColor: '#FCD0E3' }}
    >
        <div className="text-roce-100 text-4xl font-bold cursor-pointer "
        style={{ color: 'var(--color-roce-100)', }}
        >
        CakeHaven
        </div>
        <div className='flex flex-row items-center gap-10  rounded-full pt-2 pb-2 px-10 py-10 border-1 shadow-md'
        style={{background:'white' ,  borderColor: '#F578AF' }}
        >
            <button className='link-underline flex flex-row items-center text-md pb-1 cursor-pointer' style={{ color: 'var(--color-roce-300)' }} >Home</button>
            <button className='link-underline flex flex-row items-center text-md pb-1 cursor-pointer' style={{ color: 'var(--color-roce-300)' }}>All Flavors</button>
            <button className='link-underline flex flex-row items-center text-md pb-1 cursor-pointer' style={{ color: 'var(--color-roce-300)' }}>Customize Cake</button>
            <button className='link-underline flex flex-row items-center text-md pb-1 cursor-pointer' style={{ color: 'var(--color-roce-300)' }}>Gallery</button>
        </div> 
        <div className='flex flex-row items-center gap-6 mr-10'>
            <button className='button1 text-red-400'><FiHeart /></button >
            <button className='button1 text-red-400'><MdOutlineShoppingCart /></button>
            <button className='button1 text-red-400'><FaRegUser /></button>
        </div>
    </header>
  )
}


{/* <header className="flex flex-row justify-between bg-gradient-roce-2 items-center "
        style={{ backgroundImage: 'var(--gradient-roce-2)' }}
    ></header> */}