import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 md:pl-14 pt-10 bg-gradient-to-r from-[#0558FF] to-[#A9CFFF] w-full max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>
      <div className='flex-1 py-8 px-6 md:px-10 text-white'>
        <h2 className='text-3xl md:text-4xl font-bold'>Do You Own a <span className='text-yellow-300'>Luxury</span> Car?</h2>
        <p className='mt-4 text-white/90 max-w-[560px]'>Monetize your vehicle effortlessly by listing it on <span className='font-bold text-yellow-300'>Weerasekara</span> Car Rental</p>
        <p className='mt-2 text-white/80 max-w-[560px]'>We take care of insurance, driver verification and secure payment processing, so you can earn passive income, stress-free.</p>

        <button className='mt-6 inline-block px-6 py-2 bg-white hover:bg-slate-100 transition-all text-blue-600 rounded-lg text-sm cursor-pointer'>
        List Your Favorite Car
        </button>
        
      </div>
      <div className='flex-1 flex items-end justify-end pr-6 md:pr-10 pb-6'>
        <img src={assets.banner_car_image} alt='car' className='max-h-56 w-auto'/>
      </div>
    </div>
  )
}

export default Banner
