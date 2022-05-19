import React from 'react';
import emailjs from '@emailjs/browser';
import { useSelector } from 'react-redux';
import FormattedMessage from '../global/FormattedMessage';

const Contact = () => {
  const activeSection = useSelector((store) => store.section.activeSection);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'google',
        'portfolio_template_prova',
        e.target,
        'gvpsSYbdzidYSQf3x'
      )
      .then(e.target.reset());
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
            <input
              type="text"
              name="name"
              min={5}
              autoComplete="off"
              required
            />
          </fieldset>

          <fieldset>
            <legend>
              <FormattedMessage id="contact_email" />
            </legend>
            <input type="email" required name="email" autoComplete="off" />
          </fieldset>

          <fieldset>
            <legend>
              <FormattedMessage id="contact_message" />
            </legend>
            <textarea
              name="message"
              cols="30"
              rows="10"
              autoComplete="off"
              minLength={10}
              required
            ></textarea>
          </fieldset>

          <button
            type="submit"
          ><FormattedMessage id="contact_submit" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
