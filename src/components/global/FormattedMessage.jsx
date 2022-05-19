import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import translations from '../../translations'

const FormattedMessage = ({id}) => {
  const lang = useSelector((store) => store.lang.lang)
  return (
    <>{translations[lang][id] || translations.en[id]}</>
  )
}

FormattedMessage.propTypes = {
  id: PropTypes.string.isRequired
}

export default FormattedMessage