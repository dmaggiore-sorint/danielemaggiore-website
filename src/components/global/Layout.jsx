import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ArrowTop from './ArrowTop'
import Navbar from './Navbar'

const Layout = () => {
  const [activeSection, setActiveSection] = useState(0)

  const scrollToSection = (section) => {
    document
      .querySelector('.layout')
      .scrollTo({ top: window.innerHeight * section, behavior: 'smooth' })
    setActiveSection(section)
  }

  useEffect(() => {
    const layout = document.querySelector('.layout')
    const preventScroll = (e) => {
      e.preventDefault()
      e.stopPropagation()
      if (e.deltaY > 0) {
        scrollToSection(Math.min(activeSection + 1, 5))
      } else if (e.deltaY < 0) {
        scrollToSection(Math.max(activeSection - 1, 0))
      }
      return false
    }
    layout.addEventListener('wheel', preventScroll, { passive: false })
    layout.addEventListener('touchmove', preventScroll, { passive: false })

    return () => {
      layout.removeEventListener('wheel', preventScroll, { passive: false })
      layout.removeEventListener('touchmove', preventScroll, { passive: false })
    }
  }, [activeSection])

  return (
    <div className="layout">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <ArrowTop scroll={() => scrollToSection(0)} />
      <Outlet />
    </div>
  )
}

export default Layout
