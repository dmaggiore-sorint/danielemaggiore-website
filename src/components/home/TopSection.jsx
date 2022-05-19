import React from 'react'
import { useSelector } from 'react-redux'
import translations from '../../translations'
import FormattedMessage from '../global/FormattedMessage'

const TopSection = () => {
  const lang = useSelector((store) => store.lang.lang)
  return (
    <>
      <div className="top-section">
        <FormattedMessage id='hello' /> Daniele Maggiore
      </div>
      <div className="top-section"><FormattedMessage id='webDeveloper' /></div>
    </>
  )
}

export default TopSection
