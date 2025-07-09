import React from 'react'
import Slidebar from '../../components/Slidebar'
import AdminHeader from '../../components/AdminHeader'
import Items from '../../components/Items'

export default function CreateItem() {
  return (
    <div className='flex flex-row'>
      <Slidebar/>
      <div className='ml-75 flex flex-col w-full'>
        <AdminHeader/>
        <div>
            <Items/>
        </div>
      </div>
    </div>
  )
}
