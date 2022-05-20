import React from 'react';
import FormattedMessage from '../global/FormattedMessage';

const TopSection = () => {
  return (
    <>
      <div className="top-section">
        <FormattedMessage id="hello" /> Daniele Maggiore
      </div>
      <div className="top-section">
        <FormattedMessage id="webDeveloper" />
      </div>
    </>
  );
};

export default TopSection;
