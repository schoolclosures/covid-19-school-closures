import React from 'react';
import './navbar.styles.scss';

const Navbar = ({ openModal }) => {
  return (
    <div className="nav-bar row">
      <div className="nav-left">
        <button onClick={openModal} className="no-bg-btn">
          <i className="menu-icon"></i>
        </button>
      </div>
      <div className="nav-center row"><i className="home-icon"></i><p className="nav-text">schoolclosures.org</p></div>
      <div className="nav-right"><i className="search-icon"></i></div>
    </div>
  )
};

export default Navbar;
