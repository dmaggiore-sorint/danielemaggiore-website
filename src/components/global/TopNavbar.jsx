import React from 'react';
import PropTypes from 'prop-types';

const TopNavbar = ({ scrollToSection }) => {
  return (
    <div className="top-navbar">
      <div onClick={() => scrollToSection(0)}>Daniele Maggiore</div>
      <div className="spacer" />
      <div>
        <i className="fa-brands fa-linkedin"></i>
      </div>
      <div>
        <i className="fa-brands fa-facebook-square"></i>
      </div>
      <div>
        <i className="fa-brands fa-instagram"></i>
      </div>
    </div>
  );
};

TopNavbar.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
};

export default TopNavbar;
