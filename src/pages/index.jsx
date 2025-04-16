import React from 'react';
import '../styles/styles.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="custom-footer">
    <p>&copy; 2025 Paradise Hotel. All rights reserved.</p>
    <p>Follow us on social media!</p>
    <div className="social-icons">
      <a
        href="https://www.linkedin.com/in/bilal-waseem-b44006338"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        <FaLinkedin className="icon" />
      </a>
      <a
        href="https://github.com/bilalwaseem111"
        target="_blank"
        rel="noopener noreferrer"
        className="icon-link"
      >
        <FaGithub className="icon" />
      </a>
    </div>
    <p className="made-by">Made by Bilal Waseem</p>
  </footer>
  );
};

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <h1>Pradise Hotel</h1>
        </div>
        <nav>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/rooms" className="view-rooms-button">View Rooms</a></li>
          </ul>
        </nav>
      </header>

      <main className="main-content">
        <section className="hero">
          <h2>Your Comfort is Our Priority</h2>
          <p>
            Experience unparalleled comfort and refined elegance at Paradise Hotel — where every detail is crafted to provide a serene escape from the ordinary...
          </p>
          <button className="view-rooms-button" onClick={() => window.location.href='/rooms'}>
            View Rooms
          </button>
        </section>

        <section id="about" className="about">
          <div className="about-container">
            <h2>About Pradise Hotel</h2>
            <p className="lead-text">Where luxury meets comfort in perfect harmony</p>
            <div className="about-content">
              <p className="description">Pradise Hotel is an award-winning luxury destination...</p>
              <ul className="features-list">
                <li><span className="icon">✓</span> Spacious, elegant rooms...</li>
                <li><span className="icon">✓</span> World-class spa...</li>
                <li><span className="icon">✓</span> 5-star gourmet dining...</li>
                <li><span className="icon">✓</span> State-of-the-art business center...</li>
                <li><span className="icon">✓</span> 24/7 personalized concierge service</li>
                <li><span className="icon">✓</span> Rooftop infinity pool...</li>
                <li><span className="icon">✓</span> Sustainable luxury...</li>
                <li><span className="icon">✓</span> Strategic central location...</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="services-container">
            <h2>Our Premium Services</h2>
            <p className="services-subtitle">Exceptional hospitality experiences tailored to your needs</p>
            <div className="services-grid">
              {/* 8 service cards */}
              <div className="service-card">
                <div className="service-icon">📶</div>
                <h3>High-Speed Connectivity</h3>
                <p>Complimentary ultra-fast Wi-Fi throughout the property...</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🕒</div>
                <h3>24/7 Gourmet Room Service</h3>
                <p>Round-the-clock dining available anytime</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🏊</div>
                <h3>Infinity Pool & Cabanas</h3>
                <p>Temperature-controlled rooftop pool...</p>
              </div>
              <div className="service-card">
                <div className="service-icon">💆</div>
                <h3>Luxury Spa Retreat</h3>
                <p>Holistic wellness center with premium products</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🏋</div>
                <h3>Personal Concierge</h3>
                <p>Dedicated assistants for all your needs</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🚗</div>
                <h3>Valet & Transportation</h3>
                <p>Luxury vehicle services and rentals</p>
              </div>
              <div className="service-card">
                <div className="service-icon">💼</div>
                <h3>Business Center</h3>
                <p>Workspace with meeting rooms and equipment</p>
              </div>
              <div className="service-card">
                <div className="service-icon">👶</div>
                <h3>Family Services</h3>
                <p>Kids' activities and amenities</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
