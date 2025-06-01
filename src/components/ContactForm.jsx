import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const response = await fetch("https://formsubmit.co/ajax/karthikeyanp3198@gmail.com", {
      method: "POST",
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    });

    if (response.ok) {
      setSent(true);
      e.target.reset(); // clear form
    }
  };

  return (
    <div>
      <div className="contact-container" id="contact">
        <h2 className="contact-title">Contact Us</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="input-group">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
          </div>
          <input type="text" name="subject" placeholder="Subject" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

          <button type="submit" className="submit-btn">Send Message</button>
        </form>

        {sent && (
          <p style={{ color: 'green', marginTop: '10px' }}>
            ✅ Message sent! We’ll get back to you soon.
          </p>
        )}
      </div>

      <h2 className="time-is-price">Time is Price</h2>
    </div>
  );
};

export default ContactForm;