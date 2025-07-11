import React from 'react'
import Slidebar from '../../components/Slidebar'

export default function Admin() {
  return (
    <div className='flex flex-row'>
        <div className=''>
            <Slidebar/>
        </div>
        <div className='bg-green-500 w-full ml-80'>Right</div>
      
    </div>
  )
}
