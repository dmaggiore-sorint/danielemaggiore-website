import React from 'react';
import PropTypes from 'prop-types';
import FormattedMessage from './FormattedMessage';

const SideNavbar = ({ activeSection, scrollToSection }) => {
  return (
    <div className="side-navbar">
      <div
        className={activeSection === 1 ? 'active' : ''}
        onClick={() => scrollToSection(1)}
      >
        <FormattedMessage id="about" />
      </div>
      <div
        className={activeSection === 2 ? 'active' : ''}
        onClick={() => scrollToSection(2)}
      >
        <FormattedMessage id="skills" />
      </div>
      <div
        className={activeSection === 3 ? 'active' : ''}
        onClick={() => scrollToSection(3)}
      >
        <FormattedMessage id="works" />
      </div>
      <div
        className={activeSection === 4 ? 'active' : ''}
        onClick={() => scrollToSection(4)}
      >
        <FormattedMessage id="insterests" />
      </div>
      <div
        className={activeSection === 5 ? 'active' : ''}
        onClick={() => scrollToSection(5)}
      >
        <FormattedMessage id="contact" />
      </div>
    </div>
  );
};

SideNavbar.propTypes = {
  activeSection: PropTypes.number.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default SideNavbar;
