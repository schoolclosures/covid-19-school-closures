import React from 'react';
import PropTypes from 'prop-types';

const Partner = ( {name} ) => {
  return (
    <div className="partner">
      { name }
    </div>
  )
};

Partner.defaultProps = {
  name: "",
}

Partner.propTypes = {
  name: PropTypes.string,
}

export default Partner;
