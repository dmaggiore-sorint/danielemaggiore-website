import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ArrowTop from './ArrowTop'
import LangButton from './LangButton'
import SideNavbar from './SideNavbar'
import TopNavbar from './TopNavbar'

const Layout = () => {
  const [activeSection, setActiveSection] = useState(0)

  const scrollToSection = (section) => {
    document
      .querySelector('.layout')
      .scrollTo({ top: document.querySelector(`section:nth-child(${section+1})`).offsetTop, behavior: 'smooth' })
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
      <SideNavbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <TopNavbar scrollToSection={scrollToSection} />
      <ArrowTop scroll={() => scrollToSection(0)} />
      <LangButton />
      <Outlet />
    </div>
  )
}

export default Layout
