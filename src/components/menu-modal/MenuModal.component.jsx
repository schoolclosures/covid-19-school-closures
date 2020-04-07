import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './menu-modal.styles.scss';

const MenuModal = ({ modalIsOpen, closeModal }) => {
  return (
    <div className={`menu-modal column ${modalIsOpen ? "open" : ""}`}>
      <button onClick={() => closeModal()} className="no-bg-btn">
        <i className="close-icon"></i>
      </button>
      <Link className="menu-modal-link" to="/">Home</Link>
      <Link className="menu-modal-link" to="#">For Parents</Link>
      <Link className="menu-modal-link" to="#">For Teachers</Link>
      <Link className="menu-modal-link" to="/about">About Us</Link>
      <Link className="menu-modal-link" to="/contact">Contact Us</Link>
    </div>
  )
};

MenuModal.propTypes = {
  modalIsOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};

MenuModal.defaultProps = {
  modalIsOpen: false,
  closeModal: () => {},
};

export default MenuModal;
