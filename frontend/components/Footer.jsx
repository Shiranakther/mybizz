import React from 'react'
import { HiCake } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa6";
import { MdPermPhoneMsg } from "react-icons/md";
import { FiMail } from "react-icons/fi";    
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function Footer() {
  return (
    
        <footer className='relative flex flex-col mt-10  bg-red-400 w-full' style={{background:'#95143D'}} >

            <div className='flex flex-row justify-evenly bg-gray-700/10 pt-10 pb-10'>       
                <div className='flex flex-col w-xl'>
                    <div className='flex flex-row items-center  gap-2'>
                        <div className='flex flex-col items-center justify-center h-15 w-15 bg-white/40 text-4xl rounded-full text-white cursor-pointer' ><HiCake /></div>
                        <div className='flex flex-col text-left ml-3'>
                            <div className='text-4xl font-bold text-white cursor-pointer'>Cake Haven</div>
                            <div className='text-lg text-white'>Cakes and Confections</div>
                        </div>
                    </div>
                    <div className='text-left mt-8 text-lg text-white'>Where every bite tells a sweet story and every cake creates unforgettable memories. Connecting cake lovers with passionate bakers.</div>
                    <div className='flex flex-row mt-8 gap-4 '>
                        <div className='button1 text-red-500 '><FaFacebook /></div>
                        <div className='button1 text-red-500'><AiFillInstagram /></div>
                        <div className='button1 text-red-500'><FaYoutube /></div>
                    </div>
                </div>
                <div className='flex flex-col text-left text-white' >
                    <div className='text-xl font-bold mt-3 mb-3'>Sweet Links</div>
                    <div className='flex flex-col gap-2 cursor-pointer'>
                        <div className='hover:scale-110'>Custom Caks</div>
                        <div className='hover:scale-110'>Wedding Cakes</div>
                        <div className='hover:scale-110'>Birthday Cakes</div>
                        <div className='hover:scale-110'>Cupcakes</div>
                        <div className='hover:scale-110'>Gift Cards</div>
                    </div>
                </div>
                <div className='flex flex-col text-left '>
                    <div className='text-xl font-bold mt-3 mb-3 text-white'>Contact</div>
                    <div className='flex flex-col gap-3'>
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='flex flex-col justify-center h-8 w-8  rounded-full items-center bg-white/40 text-white'><MdPermPhoneMsg /></div>
                            <div className='text-white'> +94 70 256 2541</div>
                        </div>
                        <div className='flex flex-row gap-3 items-center  '>
                            <div className='flex flex-col justify-center h-8 w-8  rounded-full items-center bg-white/40 text-white'><FiMail /></div>
                            <div className='text-white'> info@cakehaven.com</div>
                        </div>
                        <div className='flex flex-row gap-3 items-center'>
                            <div className='flex flex-col justify-center h-8 w-8  rounded-full items-center bg-white/40 text-white'><HiOutlineBuildingOffice2 /></div>
                            <div className='text-white'> No 107 , Kandy Rd. Malabe, Colombo</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-evenly bg-gray-800/50 text-white pt-5 pb-5 '>
                <div className='flex flex-row gap-5'>
                    <div className='cursor-pointer'>Privacy Policy</div>
                    <div className='cursor-pointer'>Terms Of Service</div>
                    <div className='cursor-pointer'>Cookey Policy</div>
                </div>
                <div>
                    <div>© 2025 Cake Haven. All rights reserved.</div>
                </div>
            </div>
    
        </footer>
    
  )
}
