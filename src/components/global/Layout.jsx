import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='layout'>
      {/* <Navbar darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      <Outlet />
    </div>
  )
}

export default Layout
