import React from 'react';

const TopNavbar = ({ scrollToSection }) => {

  return (
    <div className='top-navbar'>
      <div onClick={ () => scrollToSection(0) }>Daniele Maggiore</div>
      <div className='spacer' />
      <div><i class="fa-brands fa-linkedin"></i></div>
      <div><i class="fa-brands fa-facebook-square"></i></div>
      <div><i class="fa-brands fa-instagram"></i></div>
    </div>
  )
}

export default TopNavbar;