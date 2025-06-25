import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const LogoutButton = () => {
  const { signOut } = useAuth();

  const handleLogout = async () => {
    try {
      await signOut();
      // Optional: redirect or show a message after logout
    } catch (error) {
      console.error('Error logging out:', error.message);
      // Optional: show error message to user
    }
  };

  // Added a class for easier styling from Navbar.css
  return <button onClick={handleLogout} className="nav-btn logout-btn-class">Logout</button>;
};

export default LogoutButton;
