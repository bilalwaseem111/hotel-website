import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log(formData);

    setMessageSent(true);

    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us!</p>

      {messageSent && <p className="success-message">Your message has been sent successfully!</p>}

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;

{/* Inline CSS */}
<style jsx>{`
  .contact-container {
    padding: 40px;
    background-color: #f9f9f9;
    text-align: center;
  }

  .contact-container h2 {
    font-size: 36px;
    margin-bottom: 20px;
    color: #1e3c72;
  }

  .contact-container p {
    font-size: 18px;
    margin-bottom: 40px;
  }

  .contact-form {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .contact-form input,
  .contact-form textarea {
    padding: 14px;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 16px;
  }

  .contact-form button {
    background-color: #1e3c72;
    color: white;
    padding: 14px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .contact-form button:hover {
    background-color: #2a5298;
  }

  .success-message {
    margin-top: 20px;
    color: #4caf50;
    font-size: 18px;
  }
`}</style>
