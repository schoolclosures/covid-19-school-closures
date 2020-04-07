import React from 'react';
import PropTypes from 'prop-types';
import './button_link.styles.scss';
import { Link } from 'react-router-dom';

const ButtonLink = ( { outlineColor, path, buttonAction } ) => {
  return (
    <button className={`${outlineColor}-btn cta-btn`}>
      <Link to={`${path}`} className="button-link">
        {buttonAction}
      </Link>
    </button>
  )
};

ButtonLink.propTypes = {
  outlineColor: PropTypes.string,
  path: PropTypes.string,
  buttonAction: PropTypes.string,
};

ButtonLink.defaultProps = {
  outlineColor: "",
  path: "",
  buttonAction: "",
};

export default ButtonLink;
