import React from 'react'
import { Outlet } from 'react-router-dom'
import ArrowTop from './ArrowTop'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className='layout'>
      <Navbar />
      <ArrowTop />
      <Outlet />
    </div>
  )
}

export default Layout
