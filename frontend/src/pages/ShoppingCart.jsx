import React from 'react'
import CartItem from '../../components/CartItem'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
export default function ShoppingCart() {
  return (
    <div className='flex flex-col'>
        <Header/>
        <div className='flex flex-row mt-30'>
            <div className='flex flex-col'>
                <CartItem/>
            </div>
            <div>
                Item Value Details
            </div>
        </div>
        <Footer/>
    </div>
  )
}
