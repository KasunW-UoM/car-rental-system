import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, dummyCarData } from '../assets/assets'
import CarCard from '../components/CarCard'

const Car = () => {
  const [input, setInput] = useState('')

  const filtered = dummyCarData.filter(car => {
    const term = input.toLowerCase()
    return (
      car.brand.toLowerCase().includes(term) ||
      car.model.toLowerCase().includes(term) ||
      car.category.toLowerCase().includes(term) ||
      car.location.toLowerCase().includes(term)
    )
  })

  return (
    <div>
      <div className='flex flex-col items-center py-20 bg-light max-md:px-4'>
        <Title
          title="All Available Cars"
          subTitle="Browse our wide selection of vehicles available for your next adventure"
        />

        <div className='flex items-center bg-white px-4 mt-6 max-w-140 w-full h-12 rounded-full shadow'>
          <img src={assets.search_icon} alt="Search" className='w-4.5 h-4.5 mr-2' />
          <input
            value={input}
            type="text"
            placeholder='Search by make, model, category, or location'
            className='w-full h-full outline-none text-gray-500'
            onChange={(e) => setInput(e.target.value)}
          />
          <img src={assets.filter_icon} alt="Filter" className='w-4.5 h-4.5 mr-2' />
        </div>
      </div>

      <div className='px-6 md:px-16 lg:px-24 xl:px-32 py-12'>
        <p className='text-gray-500 max-w-7xl'>Showing {dummyCarData.length} Cars</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 
        mt-4 kl:px-20 max-w-7xl mx-auto'>
          {dummyCarData.map((car,index) => (
            <div key={index}>
              <CarCard car={car} />
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Car
