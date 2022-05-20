import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setLang } from '../../store/langSlice';
import it from '../../assets/it.png';
import en from '../../assets/en.png';

const Navbar = ({ activeSection, scrollToSection }) => {
  const dispatch = useDispatch();

  const lang = useSelector((store) => store.lang.lang);

  const switchLang = () => {
    dispatch(setLang(lang === 'en' ? 'it' : 'en'));
  };

  return (
    <div className="navbar">
      <div onClick={() => scrollToSection(0)}>Daniele Maggiore</div>
      <div className="spacer" />
      <div
        className={activeSection === 1 ? 'active' : ''}
        onClick={() => scrollToSection(1)}
      >
        section1
      </div>
      <div
        className={activeSection === 2 ? 'active' : ''}
        onClick={() => scrollToSection(2)}
      >
        section2
      </div>
      <div
        className={activeSection === 3 ? 'active' : ''}
        onClick={() => scrollToSection(3)}
      >
        section3
      </div>
      <div
        className={activeSection === 4 ? 'active' : ''}
        onClick={() => scrollToSection(4)}
      >
        section4
      </div>
      <div
        className={activeSection === 5 ? 'active' : ''}
        onClick={() => scrollToSection(5)}
      >
        section5
      </div>
      <img
        src={lang === 'it' ? it : en}
        alt="switch language"
        onClick={switchLang}
        height="38"
        width="66"
      />
    </div>
  );
};

Navbar.propTypes = {
  activeSection: PropTypes.number.isRequired,
  scrollToSection: PropTypes.func.isRequired,
};

export default Navbar;
