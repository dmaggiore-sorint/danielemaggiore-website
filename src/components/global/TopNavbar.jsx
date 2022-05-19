import React from 'react';

const TopNavbar = ({ scrollToSection }) => {
  return (
    <div className="top-navbar">
      <div onClick={() => scrollToSection(0)}>Daniele Maggiore</div>
      <div className="spacer" />
      <a href="https://linkedin.com" rel="noreferrer" target="_blank">
        <i class="fa-brands fa-linkedin"></i>
      </a>
      <a href="https://facebook.com" rel="noreferrer" target="_blank">
        <i class="fa-brands fa-facebook-square"></i>
      </a>
      <a href="https://instagram.com" rel="noreferrer" target="_blank">
        <i class="fa-brands fa-instagram"></i>
      </a>
    </div>
  );
};

export default TopNavbar;
