import React from 'react';
import FormattedMessage from '../global/FormattedMessage';

const About = ({ test }) => {
  return (
    <div className="about">
      <div className="about__content">
        <p className="about__title"><FormattedMessage id='about' /></p>
        <p className="about__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe in illo quaerat repudiandae ex eligendi, libero inventore aliquam ipsam quis esse sed repellat corrupti voluptas iste a. Voluptate rem ex molestias unde maxime praesentium eligendi quas sequi quisquam reprehenderit! Vitae quas, corrupti nostrum iure consequuntur nesciunt amet qui natus earum?</p>
      </div>
    </div>
  );
};

export default About;
