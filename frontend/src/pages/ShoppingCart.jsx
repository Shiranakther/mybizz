import React from 'react'
import CartItem from '../../components/CartItem'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { BsFillCartCheckFill } from "react-icons/bs";
import Checkout from '../../components/Checkout';


export default function ShoppingCart() {
  return (
    <div className='relative flex flex-col'>
        <Header/>
        <div className='flex flex-row items-center gap-5 text-3xl font-semibold text-gray-600 mt-35 text-left ml-20  pb-8'><BsFillCartCheckFill />Shopping Cart</div>
        <div className='flex flex-row mt-6'>
            <div className='flex flex-col'>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
            <div className='absolute w-120 p-10 right-0 top-30  '>
              <Checkout/>
            </div>
        </div>
        

      

        <Footer/>
    </div>
  )
}
