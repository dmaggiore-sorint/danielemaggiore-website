import React from 'react'
import { useSelector } from 'react-redux'
import translations from '../../translations'

const TopSection = () => {
  const lang = useSelector((store) => store.lang.lang)
  return (
    <>
      <div className="top-section">
        {translations[lang].hello} Daniele Maggiore
      </div>
      <div className="top-section">{translations[lang].webDeveloper}</div>
    </>
  )
}

export default TopSection
