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
import Login from "./components/Login"

const App = () => {

  // modalType can be 'login' | 'register' | null
  const [modalType, setModalType] = useState(null)

  const showLogin = modalType === 'login'
  const showRegister = modalType === 'register'
  const isOwnerPath = useLocation().pathname.startsWith('/owner')
  return (
    <>
    {showLogin && <Login defaultState="login" setShowModal={setModalType} />}
    {showRegister && <Login defaultState="register" setShowModal={setModalType} />}

      {!isOwnerPath && <Navbar openModal={setModalType} />}

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cars" element={<Car />} />
      <Route path="/car-details/:id" element={<CarDetails />} />
      <Route path="/my-bookings" element={<MyBookings />} />
      {/* Owner Routes */}
      <Route path="/owner" element={<Layout />} >
        <Route index element={<Dashboard />} />
        <Route path="add-car" element={<AddCar />} />
        <Route path="manage-cars" element={<ManageCars />} />
        <Route path="manage-bookings" element={<ManageBookings />} />
      </Route>
    </Routes>
    {!isOwnerPath && <div className="mt-12"><Footer /></div>}

    </>
  )
}

export default App