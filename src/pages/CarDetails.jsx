import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { assets, dummyCarData } from '../assets/assets'
import Loader from '../components/Loader'

const CarDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState(undefined)
  const currency = import.meta.env.VITE_CURRENCY || 'LKR'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const pickupDate = e.target.elements['pickup-date'].value
    const returnDate = e.target.elements['return-date'].value
    // Here you would typically send the booking data to your backend API
    alert(`Car reserved from ${pickupDate} to ${returnDate}`)
  }

  useEffect(() => {
    const found = dummyCarData.find(c => c._id === id || c.id === id)
    setCar(found ?? null)
  }, [id])

  if (car === undefined) return <Loader />
  if (car === null) return <p className='text-center mt-16'>Car not found</p>

  return (
    <div className='px-6 md:px-16 lg:py-24 xl:px-32'>
      <button onClick={() => navigate(-1)} className='flex items-center gap-2 text-gray-600 cursor-pointer mb-6'>
        <img src={assets.arrow_icon} alt="" className='rotate-180 opacity-65' />
        Back to all cars
      </button>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12'>
        {/* Left: Car Image & Details */}
        <div className='lg:col-span-2'>
          <img src={car.image} alt={`${car.brand} ${car.model}`} className='w-full h-auto md:max-h-100 object-cover rounded-xl mb-6 shadow-md' />

          <div>
            <h1 className='text-3xl font-bold'>{car.brand} {car.model}</h1>
            <p className='text-gray-500 text-lg mb-4'>{car.category} · {car.year}</p>

            <hr className='border-borderColor my-6' />

            <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6'>
              {[
                { icon: assets.users_icon, text: `${car.seating_capacity} Seats` },
                { icon: assets.fuel_icon, text: car.fuel_type },
                { icon: assets.car_icon, text: car.transmission },
                { icon: assets.location_icon, text: car.location },
              ].map(({ icon, text }) => (
                <div key={text} className='flex flex-col items-center bg-light p-4 rounded-lg shadow-sm'>
                  <img src={icon} alt="" className='w-8 h-8 mb-2' />
                  {text}
                </div>
              ))}
            </div>

            <div className='mb-6'>
              <h2 className='text-xl font-medium mb-3'>Description</h2>
              <p className='text-gray-500'>{car.description}</p>
            </div>

            <div className='mb-6'>
              <h2 className='text-xl font-medium mb-3'>Features</h2>
              <ul className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
                {[
                  'Air Conditioning', 'Bluetooth', 'GPS Navigation', 'Heated Seats', 'Sunroof', 'Backup Camera'
                ].map(item => (
                  <li key={item} className='flex items-center'>
                    <img src={assets.check_icon} alt="" className='h-4 mr-2' />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right: Booking Form */}
        <aside onSubmit={handleSubmit} className='shadow-lg h-max sticky top-3 rounded-xl p-6 space-y-6 text-gray-500'>
          <p className='flex items-center justify-between text-2xl text-gray-800 font-semibold'>
            {currency}{car.pricePerDay}
            <span className='text-base text-gray-400 font-normal'>per day</span>
          </p>
          <hr  className='border-borderColor my-6'/>

          <div className='flex flex-col gap-2'>
            <label htmlFor="pickup-date">PickUp Date</label>
            <input type="date" id="pickup-date" className='w-full p-3 border border-gray-300 rounded-lg mt-2' 
            required min={new Date().toISOString().split('T')[0]}
            />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="return-date">Return Date</label>
            <input type="date" id="return-date" className='w-full p-3 border border-gray-300 rounded-lg mt-2' 
            required/>
          </div>

          <button className='w-full py-3 bg-primary text-white rounded-lg'>Reserve Now</button>
         <p className=' text-center text-sm text-gray-400 mt-2'>No Credit card required to reserve</p>
        </aside>
      </div>
    </div>
  )
}

export default CarDetails
