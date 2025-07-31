import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
function DashboardLayout() {
  return (
    <>
    <Navbar />
    <div className='min-h-[80vh]'>
     <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default DashboardLayout