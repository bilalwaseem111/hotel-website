import React, { useState } from 'react';
import Link from 'next/link';

const Booking = () => {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  };

  return (
    <div className="booking-container">
      <div className="booking-card">
        <h2 className="booking-title">Book Your Stay</h2>
        <form className="booking-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="date" placeholder="Check-in Date" required />
          <input type="date" placeholder="Check-out Date" required />
          <select required>
            <option value="">Select Room Type</option>
            <option value="Deluxe">Deluxe Room</option>
            <option value="Suite">Luxury Suite</option>
            <option value="Budget">Budget Room</option>
            <option value="Executive">Executive Room</option>
            <option value="Presidential">Presidential Suite</option>
            <option value="Family">Family Room</option>
            <option value="Standard">Standard Room</option>
            <option value="Superior">Superior Room</option>
            <option value="Penthouse">Penthouse Suite</option>
            <option value="Villa">Private Villa</option>
            <option value="OceanView">Ocean View Room</option>
            <option value="GardenView">Garden View Room</option>
            <option value="Single">Single Room</option>
            <option value="Double">Double Room</option>
            <option value="Twin">Twin Room</option>
            <option value="Studio">Studio Suite</option>
            <option value="Loft">Loft Suite</option>
            <option value="Skyline">Skyline Room</option>
            <option value="King">King Room</option>
            <option value="Queen">Queen Room</option>
          </select>
          <textarea placeholder="Special Requests (Optional)" rows="4" />
          <div className="payment-method">
            <h3>Payment Method</h3>
            <div className="payment-options">
              <label>
                <input type="radio" name="payment" value="credit" /> Credit Card
              </label>
              <label>
                <input type="radio" name="payment" value="paypal" /> PayPal
              </label>
            </div>
          </div>
          <button type="submit" className="submit-btn">Confirm Booking</button>
        </form>

        {showNotification && (
          <div className="notification">
            Your room is successfully booked!
          </div>
        )}

        <Link href="/">
          <button className="back-home-btn">Back to Home</button>
        </Link>
      </div>

      <style jsx>{`
        .booking-container {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to right, #141e30, #243b55);
          animation: fadeIn 1.5s ease-in-out;
        }
        .booking-card {
          background: #ffffff;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
          max-width: 600px;
          width: 100%;
          animation: slideIn 1s ease;
        }
        .booking-title {
          font-size: 32px;
          margin-bottom: 20px;
          text-align: center;
          color: #1e3c72;
          font-family: 'Arial', sans-serif;
        }
        .booking-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .booking-form input,
        .booking-form select,
        .booking-form textarea {
          padding: 14px;
          border: 1px solid #ccc;
          border-radius: 10px;
          font-size: 16px;
          font-family: 'Arial', sans-serif;
          transition: border 0.3s;
        }
        .booking-form input:focus,
        .booking-form select:focus,
        .booking-form textarea:focus {
          border: 1px solid #1e3c72;
          outline: none;
        }
        .payment-method {
          margin-top: 20px;
          background: #f9f9f9;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        }
        .payment-method h3 {
          font-size: 20px;
          color: #333;
        }
        .payment-options {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .payment-options label {
          font-size: 16px;
          color: #333;
        }
        .submit-btn {
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          color: white;
          padding: 14px;
          font-size: 16px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .submit-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }
        .back-home-btn {
          margin-top: 20px;
          background: transparent;
          color: #1e3c72;
          border: 2px solid #1e3c72;
          padding: 10px;
          font-size: 14px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .back-home-btn:hover {
          background: #1e3c72;
          color: #fff;
        }
        .notification {
          padding: 15px 30px;
          margin-top: 20px;
          background: #4CAF50;
          color: white;
          text-align: center;
          font-size: 18px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          font-weight: bold;
          transition: transform 0.3s ease-in-out;
        }
        .notification:hover {
          transform: scale(1.05);
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes slideIn {
          from {
            transform: translateY(-50px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Booking;
