import React from 'react';
import PropTypes from 'prop-types';
import './div_link.styles.scss';
import { Link } from 'react-router-dom';

const DivLink = ( { path, buttonText, handleClick, iconType } ) => {
  return (
    <div className="div-link row">
      <button className="btn-link-holder no-bg-btn" onClick={handleClick} >
        <Link to={`${path}`} className="btn-link">
          {buttonText}
        </Link>
      </button>
      <i className={`${iconType}-icon`} ></i>
    </div>
  )
};

DivLink.propTypes = {
  path: PropTypes.string,
  buttonAction: PropTypes.string,
  handleClick: PropTypes.func,
};

DivLink.defaultProps = {
  path: "",
  buttonAction: "",
  handleClick: () => {},
};

export default DivLink;
