import React, { useState } from "react"
import Navbar from "./components/Navbar"
import { Routes,Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Car from "./pages/Car"
import CarDetails from "./pages/CarDetails"
import MyBookings from "./pages/MyBookings"
import Footer from "./components/Footer"
import Layout from "./pages/owner/Layout"
import Dashboard from "./pages/owner/Dashboard"
import AddCar from "./pages/owner/AddCar"
import ManageCars from "./pages/owner/ManageCars"
import ManageBookings from "./pages/owner/ManageBookings"

const App = () => {

  const [showLogin, setShowLogin] = useState(false)
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} />}

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cars" element={<Car />} />
      <Route path="/car-details/:id" element={<CarDetails />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      {/* Owner Routes */}
      <Route path="/owner" element={<Layout />} >
        <Route index element={<Dashboard />} />
        <Route path="add-car" element={<AddCar />} />
        <Route path="manage-car" element={<ManageCars />} />
        <Route path="manage-bookings" element={<ManageBookings />} />
      </Route>
    </Routes>
    {!isOwnerPath && <div className="mt-12"><Footer /></div>}

    </>
  )
}

export default App