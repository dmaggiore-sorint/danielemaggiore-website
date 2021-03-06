import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../../store/langSlice';
import it from '../../assets/it.png';
import en from '../../assets/en.png';

const LangButton = () => {
  const dispatch = useDispatch();
  const lang = useSelector((state) => state.lang.lang);
  const switchLang = () => {
    dispatch(setLang(lang === 'en' ? 'it' : 'en'));
  };
  return (
    <img
      className='lang-button'
      src={lang === 'it' ? it : en}
      alt="switch language"
      onClick={switchLang}
      height="38"
      width="66"
    />
  );
};

export default LangButton;
