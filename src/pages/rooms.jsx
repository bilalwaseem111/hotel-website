import React from 'react';
import Link from 'next/link';

const roomDetails = [
  { image: 'room.jpg', name: 'Deluxe Room', price: '$120/night' },
  { image: 'luxuryroom.jpg', name: 'Luxury Suite', price: '$250/night' },
  { image: 'infinity.jpg', name: 'Infinity View Suite', price: '$300/night' },
  { image: 'service.jpg', name: 'Premium Service Room', price: '$180/night' },
  { image: 'spa.jpg', name: 'Royal Spa Room', price: '$220/night' },
  { image: '12.jpg', name: 'Executive Stay Deluxe', price: '$200/night' },
  { image: 'hotel2.jpg', name: 'Garden View Retreat', price: '$190/night' },
  { image: '19.jpg', name: 'Classic Heritage Suite', price: '$160/night' },
  { image: '20.jpg', name: 'Modern Classic Elegance', price: '$170/night' },
  { image: '13.jpg', name: 'Urban Comfort King', price: '$155/night' },
  { image: 'dining.jpg', name: 'Dining Experience Suite', price: '$210/night' },
  { image: 'hotelpool.jpg', name: 'Poolside Paradise', price: '$260/night' },
  { image: 'hotel1.jpg', name: 'City View Executive', price: '$185/night' },
  { image: 'hotel2.jpg', name: 'Twin Luxury Retreat', price: '$195/night' },
  { image: '50.jpg', name: 'Cozy Budget Room', price: '$105/night' },
  { image: '51.jpg', name: 'Simple Stay Room', price: '$100/night' },
  { image: '52.jpg', name: 'Essential Comfort Room', price: '$98/night' },
  { image: 'comfy.jpg', name: 'Comfy Corner Suite', price: '$115/night' },
  { image: 'gold.jpg', name: 'Golden Touch Room', price: '$130/night' },
  { image: 'honeymoon room.jpg', name: 'Honeymoon Bliss Suite', price: '$275/night' },
];

const Rooms = () => {
  return (
    <div className="rooms-page">
      <div className="header-container">
        <h1 className="rooms-heading">Explore Our Luxurious Rooms</h1>
        <Link href="/">
          <button className="back-home-btn">Back to Home</button>
        </Link>
      </div>

      <div className="room-gallery">
        {roomDetails.map((room, index) => (
          <div className="room-card" key={index}>
            <img src={`/Images/${room.image}`} alt={room.name} className="room-image" />
            <div className="room-info">
              <h3>{room.name}</h3>
              <p className="price">{room.price}</p>
              <Link href="/booking">
                <button className="book-btn">Book Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <footer className="footer">
        <p>&copy; 2025 Paradise Hotel. All rights reserved.</p>
        <p>Made by Bilal Waseem</p>
      </footer>

      <style jsx>{`
        .rooms-page {
          background: #cdc78c;
          min-height: 100vh;
          padding: 40px 20px;
          font-family: 'Segoe UI', sans-serif;
          text-align: center;
        }

        .rooms-heading {
          font-size: 46px;
          margin-bottom: 30px;
          color: #222;
          animation: fadeInDown 1s ease;
        }

        .room-gallery {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          padding: 10px;
        }

        .room-card {
          background: #fff;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .room-card:hover {
          transform: scale(1.03);
        }

        .room-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          border-bottom: 1px solid #eee;
        }

        .room-info {
          padding: 15px;
        }

        .room-info h3 {
          margin: 10px 0 5px;
          font-size: 20px;
          color: #333;
        }

        .price {
          color: #777;
          font-size: 16px;
          margin-bottom: 12px;
        }

        .book-btn {
          background: linear-gradient(135deg, #007BFF, #00BFFF);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: bold;
          font-size: 14px;
          transition: background 0.4s, transform 0.3s;
          animation: popIn 0.6s ease-in-out;
        }

        .book-btn:hover {
          background: linear-gradient(135deg, #0056b3, #0088cc);
          transform: scale(1.05);
        }

        .footer {
          margin-top: 40px;
          font-size: 14px;
          color: #666;
        }

        /* Animations */
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes popIn {
          0% {
            transform: scale(0.7);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .back-home-btn {
          margin-top: 2px;
          padding: 12px 28px;
          font-size: 16px;
          background: linear-gradient(135deg, #1e3c72, #2a5298);
          color: #fff;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.4s ease;
          animation: fadeSlideIn 1s ease forwards;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .back-home-btn:hover {
          background: linear-gradient(135deg, #2a5298, #1e3c72);
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        /* Button entrance animation */
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Rooms;
