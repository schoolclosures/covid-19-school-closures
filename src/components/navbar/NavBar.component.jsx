import React from 'react';
import './navbar.styles.scss';
import { Link } from 'react-router-dom';

const Navbar = ({ openModal }) => {
  return (
    <div className="nav-bar row">
      <div className="nav-left">
        <button onClick={openModal} className="no-bg-btn">
          <i className="menu-icon"></i>
        </button>
      </div>
      <div className="nav-center row"><i className="home-icon"></i><p className="nav-text">schoolclosures.org</p></div>
      <div className="nav-right">
        <i className="search-icon"></i>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/for-parents" className="nav-link">
          For Parents
        </Link>
        <Link to="/for-teachers" className="nav-link">
          For Teachers
        </Link>
        <Link to="/about" className="nav-link">
          About us
        </Link>
        <Link to="/contact" className="nav-link">
          Contact Us
        </Link>
      </div>
    </div>
  )
};

export default Navbar;
