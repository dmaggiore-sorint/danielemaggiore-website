import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { setActiveSection } from '../../store/sectionSlice';
import ArrowTop from './ArrowTop';
import LangButton from './LangButton';
import SideNavbar from './SideNavbar';
import TopNavbar from './TopNavbar';

const Layout = () => {
  const dispatch = useDispatch();
  const activeSection = useSelector(state => state.section.activeSection);

  const scrollToSection = (section) => {
    document
      .querySelector('.layout')
      .scrollTo({ top: window.innerHeight * section, behavior: 'smooth' });
    dispatch(setActiveSection(section));
  };

  useEffect(() => {
    const layout = document.querySelector('.layout');
    const preventScroll = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        scrollToSection(Math.min(activeSection + 1, 5));
      } else if (e.deltaY < 0) {
        scrollToSection(Math.max(activeSection - 1, 0));
      }
    };
    layout.addEventListener('wheel', preventScroll, { passive: false });
    return () => {
      layout.removeEventListener('wheel', preventScroll, { passive: false });
    };
  }, [activeSection]);

  return (
    <div className="layout">
      <TopNavbar
        scrollToSection={scrollToSection}
      />
      <SideNavbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />
      <ArrowTop scroll={() => scrollToSection(0)} />
      <LangButton />
      <Outlet />
    </div>
  );
};

export default Layout;
