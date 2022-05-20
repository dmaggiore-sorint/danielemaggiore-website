import React from 'react';
import { useSelector } from 'react-redux';
import FormattedMessage from '../global/FormattedMessage';

const Contact = () => {
  const activeSection = useSelector((state) => state.section.activeSection);

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    e.target.reset();
  };

  return (
    <div className="contact">
      <div
        className={`contact__form ${
          activeSection === 5 ? 'from-left' : 'to-left'
        }`}
      >
        <form onSubmit={sendEmail}>
          <fieldset>
            <legend>
              <FormattedMessage id="contact_name" />
            </legend>
            <input type="text" name="name" required />
          </fieldset>
          <fieldset>
            <legend>
              <FormattedMessage id="contact_email" />
            </legend>
            <input type="email" name="email" required />
          </fieldset>
          <fieldset>
            <legend>
              <FormattedMessage id="contact_message" />
            </legend>
            <textarea
              name="message"
              cols="30"
              rows="10"
              minLength={10}
              required
            ></textarea>
          </fieldset>
          <button type="submit">
            <FormattedMessage id="contact_submit" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
