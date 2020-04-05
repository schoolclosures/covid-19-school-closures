import React from 'react';
import './navbar.styles.scss';

const Navbar = () => {
  return (
    <div className="nav-bar row">
      <div className="nav-left"><i className="menu-icon"></i></div>
      <div className="nav-center row"><i className="home-icon"></i><p className="nav-text">schoolclosures.org</p></div>
      <div className="nav-right"><i className="search-icon"></i></div>
    </div>
  )
};

export default Navbar;
