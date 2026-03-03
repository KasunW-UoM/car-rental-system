import React, { useEffect, useState } from 'react'
import { assets, dummyDashboardData } from '../../assets/assets'
import Title from '../../components/owner/Title'

const Dashboard = () => {
  const currency = import.meta.env.VITE_CURRENCY

  const [data, setData] = useState({
    totalCars: 0,
    totalBookings: 0,
    pendingBookings: 0,
    completedBookings: 0,
    recentBookings: [],
    monthlyRevenue: 0
  })

  const dashboardCards = [
    {title: "Total Cars", value: data.totalCars, icon: assets.carIconColored},
    {title: "Total Bookings", value: data.totalBookings, icon: assets.listIconColored},
    {title: "Pending", value: data.pendingBookings, icon: assets.cautionIconColored},
    {title: "Confirmed", value: data.completedBookings, icon: assets.listIconColored},
  ]

  useEffect(()=>{
    setData(dummyDashboardData)
  },[])

  return (
    <div className='px-4 pt-10 md:px-10 flex-1'>
      <Title title='Admin Dashboard' subTitle='Monitor overall platform performance
      including total cars, bookings, revenue and recent activities'/>

      <div className='bg-white rounded-lg border border-gray-200 p-6 my-8 shadow-sm'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {dashboardCards.map((card, index)=>(
            <div key={index} className='flex gap-2 items-center justify-between p-4 
            rounded-md border border-borderColor bg-gray-50 hover:bg-gray-100 transition'>
              <div>
                <h1 className='text-xs text-gray-500'>{card.title}</h1>
                <p  className='text-lg font-semibold'>{card.value}</p>
              </div>
              <div className='flex items-center justify-center w-10 h-10 rounded-full 
              bg-primary/10'>
                <img src={card.icon} alt=""  className='h-4 w-4'/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Bookings + Monthly Revenue (two-column responsive) */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 my-8'>
        {/* Left: Recent Bookings (span 2 on md+) */}
        <div className='md:col-span-2 bg-white rounded-lg border border-gray-300 p-6 shadow-sm'>
          <h2 className='text-xl text-semibold mb-1'>Recent Bookings</h2>
          <p className='text-gray-500 mb-6'>Latest customer bookings</p>

          <div className='space-y-4'>
            {data.recentBookings.map((booking, index)=>(
              <div key={index} className='flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition'>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center justify-center w-12 h-12 rounded-full bg-primary/10'>
                    <img src={assets.listIconColored} alt='' className='h-5 w-5'/>
                  </div>
                  <div>
                    
                    <p className='font-medium'>{booking.car.brand} {booking.car.model}</p>
                    <p className='text-sm text-gray-500 text-semibold'> {currency}{booking.price}</p>
                    <p className='text-sm text-gray-500'>{booking.createdAt.split('T')[0]}</p>
                  </div>
                </div>

                <div>
                  <p className={`px-3 py-1 rounded-full text-sm font-medium ${
                    booking.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {booking.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Monthly Revenue */}
        <div className='p-4 md:p-6 mb-6 border border-borderColor rounded-md w-full md:max-w-xs shadow-sm'>
           <h3 className='text-lg font-medium mb-0'>Monthly Revenue</h3>
           <p className='text-gray-500 mb-2 text-sm'>Revenue for current month</p>
           <p className='text-2xl md:text-3xl font-bold text-primary'>{currency}{data.monthlyRevenue}</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
