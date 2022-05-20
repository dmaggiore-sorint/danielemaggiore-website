import React from 'react';
import PropTypes from 'prop-types';
import translations from '../../translations';
import { useSelector } from 'react-redux';

const FormattedMessage = ({ id }) => {
  const lang = useSelector((store) => store.lang.lang);
  
  return <>{translations[lang][id] || translations.en[id]}</>;
};

FormattedMessage.propTypes = {
  id: PropTypes.string.isRequired,
};

export default FormattedMessage;
