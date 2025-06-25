import React from 'react';
import './Footer.css'; // We'll create this CSS file next

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2 className="footer-logo">TelaioDev</h2>
          <p>
            Your one-stop marketplace for high-quality animations, templates,
            React components, and more, all crafted with passion.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
          </ul>
        </div>
        <div className="footer-section contact-social">
          <h3>Contact Us</h3>
          <p>Email: support@telaiodev.com</p>
          {/* Add social media icons here if you have them */}
          <div className="social-icons">
            {/* Example: <a href="#"><i className="fab fa-facebook"></i></a> */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} TelaioDev. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
