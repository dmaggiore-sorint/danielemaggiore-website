import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../../store/langSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  
  const lang = useSelector((store) => store.lang.lang);

  const switchLang = () => {
    dispatch(setLang(lang==='en' ? 'it' : 'en'));
  }

  return (
    <div className='navbar'>
      <div>Daniele Maggiore</div>
      <div>section1</div>
      <div>section2</div>
      <div>section3</div>
      <div>section4</div>
      <div onClick={ switchLang }>toggle lang</div>
    </div>
  )
}

export default Navbar;