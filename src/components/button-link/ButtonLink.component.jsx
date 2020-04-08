import React from 'react';
import PropTypes from 'prop-types';
import './button_link.styles.scss';
import { Link } from 'react-router-dom';

const ButtonLink = ( { outlineColor, path, buttonAction, handleClick } ) => {
  return (
    <button className={`${outlineColor}-btn cta-btn btn-link-holder`} onClick={handleClick} >
      <Link to={`${path}`} className="btn-link">
        {buttonAction}
      </Link>
    </button>
  )
};

ButtonLink.propTypes = {
  outlineColor: PropTypes.string,
  path: PropTypes.string,
  buttonAction: PropTypes.string,
  handleClick: PropTypes.func,
};

ButtonLink.defaultProps = {
  outlineColor: "",
  path: "",
  buttonAction: "",
  handleClick: () => {},
};

export default ButtonLink;
