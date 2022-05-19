import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ title, image }) => {
  return (
    <div className='badge'>
      <img src={ image } alt="" />
      <p>{title}</p>
    </div>
  )
}

Badge.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Badge