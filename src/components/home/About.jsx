import React from "react";
import FormattedMessage from "../global/FormattedMessage";

const About = () => {
  return <div className="about">
    <div className="about__content">
      <p className="about__title"><FormattedMessage id='about' /></p>
      <p className="about__description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo, sed dolorum. Deleniti corrupti nihil reprehenderit quod fugit inventore, doloremque harum, officiis fuga mollitia autem dolorum nostrum quibusdam praesentium sunt debitis, minima odio magnam exercitationem. Nulla adipisci magnam molestias doloribus corporis repellat veniam blanditiis libero voluptatem ea est, ipsa officia placeat.</p>
    </div>
  </div>;
};

export default About;

