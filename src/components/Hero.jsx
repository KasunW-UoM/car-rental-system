import React, { useState } from 'react'
import { assets, cityList } from '../assets/assets'

const Hero = () => {

    const [pickupLocation, setPickupLocation] = useState('')
  return (
    <div className='min-h-[50vh] flex flex-col items-center justify-center gap-6 bg-light text-center pt-12 pb-6'>
        <h2 className='text-base md:text-xl font-semibold tracking-tight'>Welcome! Luxury cars for rent in</h2>
        <h1 className='text-3xl md:text-5xl font-extrabold text-blue-600 leading-tight'>Weerasekara Car Rent Pvt. Ltd</h1>
      <div className='flex flex-col items-center gap-6 w-full'>
      <form className='flex flex-col md:flex-row items-center justify-between p-3 md:p-6 rounded-lg md:rounded-full w-[95%] md:max-w-[900px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.1)] gap-2 md:gap-4'>

            <div className='flex flex-col items-start gap-2 w-full md:w-auto md:flex-1'>
                <div className='relative w-full'>
                  <select required value={pickupLocation} onChange={(e) => 
                      setPickupLocation(e.target.value)} className='appearance-none border border-borderColor rounded-full px-4 py-2 w-full text-gray-600 cursor-pointer'>
                      <option value="">Pickup Location</option>
                      {cityList.map((city) => (
                          <option key={city} value={city}>{city}</option>
                      ))}
                  </select>
                  <img src={assets.arrow_icon} alt="dropdown" className='pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2 rotate-90 w-4 h-4' />
                </div>
                <p className='px-1 text-sm text-gray-500'>{pickupLocation ? pickupLocation : "Please select location"}</p>
            </div>

            <div className='flex flex-col items-start gap-2 w-full md:w-auto md:flex-1'>
                <label htmlFor='pickup-date' className='text-sm text-gray-600'>Pickup Date</label>
                <input type='date' id='pickup-date' 
                min={new Date().toISOString().split('T')[0]} 
                className='border border-borderColor rounded-full px-4 py-2 w-full text-left text-gray-600 cursor-pointer' required/>
            </div>

            <div className='flex flex-col items-start gap-2 w-full md:w-auto md:flex-1'>
                <label htmlFor='return-date' className='text-sm text-gray-600 ' >Return Date</label>
                <input type='date' id='return-date'
                className='border border-borderColor rounded-full px-4 py-2 w-full text-left text-gray-600 cursor-pointer' required/>
            </div>

            <button className='flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition-all text-white rounded-full cursor-pointer whitespace-nowrap'>
                <img src={assets.search_icon} alt='search' 
                className='w-5 h-5 brightness-300 '/>
                Search</button>
      </form>
      <img src={assets.main_car} alt='car' className='max-h-64 w-auto'/>
      </div>
    </div>
  )
}

export default Hero
