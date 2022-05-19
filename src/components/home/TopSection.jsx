import React from 'react';
import { useSelector } from 'react-redux';
import FormattedMessage from '../global/FormattedMessage';

const TopSection = () => {
  const activeSection = useSelector((store) => store.section.activeSection);

  return (
    <div className="top-section">

      <div className="no-overflow">
        <p
          className={`top-section__fullName ${
            activeSection === 0 ? 'from-left' : 'to-left'
          }`}
        >
          Daniele
        </p>
      </div>

      <div className="no-overflow">
        <p
          className={`top-section__fullName ${
            activeSection === 0 ? 'from-left' : 'to-left'
          }`}
        >
          Maggiore
        </p>
      </div>
      
      <div className="no-overflow">
        <div
          className={`top-section__mid-line ${
            activeSection === 0 ? 'from-left-1' : 'to-left-1'
          }`}
        />
      </div>
      
      <div className="no-overflow">
        <div
          className={`top-section__mid-line2 ${
            activeSection === 0 ? 'from-left-1' : 'to-left-1'
          }`}
        />
      </div>
      
      <div className="no-overflow">
        <div
          className={`top-section__role ${
            activeSection === 0 ? 'from-left' : 'to-left'
          }`}
        >
          <FormattedMessage id="webDeveloper" />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
