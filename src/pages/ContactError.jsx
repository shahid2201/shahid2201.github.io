import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactError = () => (
  <section className="contact-section">
    <h2>Oops!</h2>
    <p>Sorry, your message could not be sent. Please try again later or contact me directly at <a href="mailto:sheikhshahid2201@gmail.com">sheikhshahid2201@gmail.com</a>.</p>
  </section>
);

const handleSubmit = async (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const navigate = useNavigate();

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      form.reset();
      navigate('/contact-success');
    } else {
      navigate('/contact-error');
    }
  } catch (err) {
    navigate('/contact-error');
  }
};

export default ContactError;