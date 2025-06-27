import React from 'react'
import bgVideo from '../src/assets/videos/cakevid.mp4';

export default function Landing() {
  return (
    <div>
        <div
            className="flex flex-col items-center justify-evenly relative w-full h-screen overflow-hidden mt-22"
                
        >
            <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
        </video>

            <div className='flex flex-col items-center'>
                 <div className='text-white text-6xl font-bold mt-4 mb-5'>Every Slice Tells a Sweet Story</div>
            <div className='text-white text-3xl w-4xl font-bold mb-8'>From birthdays to weddings, or just because </div>
            <div className='text-white text-2xl w-3xl mb-8'>we create cakes that wow, inside and out. Handcrafted with love, made from the finest ingredients.</div>
            <div className='flex flex-row gap-4 ' >
                <input type='text' placeholder='Search for your favourite cake'  className='w-sm bg-white pl-4 rounded-md outline-none'/>
                <button type='submit' className='button2' >Explore</button>
            </div>
            </div>   
      </div>
      <div className="">
      
      </div>
    </div>
  )
}
