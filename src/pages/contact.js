import React, { useState } from 'react';
import '../styles/contact.css'; // Ensure this path is correct

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('Your message has been sent successfully!');
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We&apos;d love to hear from you! Please fill out the form below to get in touch with us.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      {message && <p className="success-message">{message}</p>}

      <style jsx>{`
        .contact-container {
          padding: 40px;
          background-color: #f9f9f9;
          text-align: center;
          min-height: 100vh;
          animation: fadeIn 1s ease-in-out;
        }

        .contact-container h2 {
          font-size: 36px;
          margin-bottom: 20px;
          color: #1e3c72;
        }

        .contact-container p {
          font-size: 18px;
          margin-bottom: 40px;
          color: #444;
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
          font-family: 'Arial', sans-serif;
          transition: border 0.3s ease;
        }

        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: #1e3c72;
          outline: none;
        }

        .contact-form button {
          background-color: #1e3c72;
          color: white;
          padding: 14px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-size: 16px;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .contact-form button:hover {
          background-color: #2a5298;
          transform: scale(1.03);
        }

        .success-message {
          margin-top: 20px;
          color: #4caf50;
          font-size: 18px;
          font-weight: bold;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(-10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Contact;
