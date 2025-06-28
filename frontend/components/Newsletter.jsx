import React from 'react'

export default function Newsletter() {
  return (
    <div className='flex-flex-col justify-center items-center text-white text-center pb-15' style={{background:'var(--gradient-roce-1)'}}>
      <div className='text-5xl font-bold pt-15  '>Stay Sweet & Connected</div>
      <div className='text-2xl w-full flex items-center justify-center mt-8 mb-8'>
        <div className='w-4xl'>This week’s specials are baked with love,<b>sweet deals, seasonal flavors,</b>  and <b>behind-the-scenes stories</b> from our kitchen to yours.</div>
         </div>
        <div className='flex flex-row gap-4 justify-center mt-12' >
                <input type='text' placeholder='Enter Your Email'  className='w-sm bg-white pl-4 rounded-md outline-none text-gray-600'/>
                <button type='submit' className='button2' >Subscribe</button>
        </div>
    </div>
  )
}
