import React from 'react'
import Header from '../../components/Header'
import Landing from '../../components/Landing'
import Category from '../../components/Category'
import { MdCake } from 'react-icons/md';

export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      
      <div className='flex flex-col justify-center items-center'  style={{ background: '#fff7ed' }}>
        <MdCake size={45} style={{ color: 'var(--color-roce-100)', }} className='mt-10' />
        <div className='mt-5 text-4xl font-bold text-gray-700  '  >Sweet Categories</div>
        <div className='text-2xl  text-gray-700 mt-4'>Explore our delicious cake categories</div>
      </div>

      
      
     <div className='flex flex-row justify-evenly items-center pt-12 mb-10 flex-wrap gap-10 pb-12 ' 
     style={{ background: '#fff7ed' }}
     >
       {Array.from({ length: 8 }).map((_, i) => (
          <Category key={i} />
        ))}
      
    </div>
    </div>
  )
}
