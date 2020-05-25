import React from 'react';
import PropTypes from 'prop-types';
import './button_link.styles.scss';
import { Link, withRouter } from 'react-router-dom';

const ButtonLink = withRouter(( { outlineColor, path, buttonAction, handleClick, history } ) => {
  return (
    <button className={`${outlineColor}-btn cta-btn btn-link-holder`} onClick={() => history.push(path)} >
      <Link to={`${path}`} className="btn-link">
        {buttonAction}
      </Link>
    </button>
  )
});

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
