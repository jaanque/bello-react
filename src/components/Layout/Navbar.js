import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // Assuming you'll use React Router
import { useAuth } from '../../contexts/AuthContext'; // Adjust path as needed
import LogoutButton from '../Auth/LogoutButton'; // Adjust path as needed
import './Navbar.css';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">TelaioDev</Link>
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Home</NavLink></li>
        <li><NavLink to="/products" className={({isActive}) => isActive ? "active" : ""}>Products</NavLink></li>
        <li><NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>About</NavLink></li>
        {/* Add more links as needed */}
      </ul>
      <div className="nav-auth">
        {user ? (
          <>
            <span className="nav-user-email">{user.email}</span>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link to="/login" className="nav-btn login-btn">Login</Link>
            <Link to="/signup" className="nav-btn signup-btn">Sign Up</Link>
          </>
        )}
        <Link to="/submit-template" className="nav-btn submit-template-btn">
          Submit Template
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
