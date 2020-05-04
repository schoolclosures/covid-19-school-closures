import React from 'react';
import PropTypes from 'prop-types';

const PageNumber = ({ value, currentPage, handleClick }) => {
  return (
    <div className="page-number" 
      style={
        {
          backgroundColor: (currentPage === value) ? '#6FA8FF': null, 
          color: (currentPage === value) ? '#080808': null
        }
      }
      onClick={() => handleClick(value)}> {value}
    </div>
  )
};

PageNumber.defaultProps = {
  value: -1,
  currentPage: -1,
  handleClick: () => {},
}

PageNumber.PropType = {
  value: PropTypes.number,
  currentPage: PropTypes.number,
  handleClick: PropTypes.func,
}

export default PageNumber;