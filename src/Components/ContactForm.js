import React from 'react';
import './ContactFormStyle.css';

const ContactForm = () => {
  return (
    <div>
      <section className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default ContactForm
