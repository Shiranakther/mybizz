import React from 'react'
import CategoryForm from '../../components/CategoryForm'
import Slidebar from '../../components/Slidebar'
import AdminHeader from '../../components/AdminHeader'

export default function CreateCategory() {
  return (
        <div className='flex flex-row'>
          <Slidebar/>
          <div className='ml-75 flex flex-col w-full '>
            <AdminHeader/>
            <div className='pl-8 pr-10'>
                <CategoryForm/>
            </div>
          </div>
        </div>
  )
}
