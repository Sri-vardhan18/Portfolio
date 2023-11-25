import React from 'react';
import './App.css'; // Import your CSS file for styling
import image5 from './Images/sri.jpg'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="profile">
        <img src={image5} alt="Profile" />
      </div>
    </div>
  );
}

export default Navbar;
