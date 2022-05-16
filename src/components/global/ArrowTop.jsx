import React from 'react'

const ArrowTop = () => {
  const scrollToTop = () => {
    document.querySelector('.layout').scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <button
      className='arrow-top'
      type='button'
      onClick={ scrollToTop }
    >
      <i class="fa-solid fa-arrow-up-long"></i>
    </button>
  )
}

export default ArrowTop;