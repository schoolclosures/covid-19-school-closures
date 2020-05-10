import React from 'react';
import PageNumber from '../page-number/PageNumber.component';
import './pagination_controls.styles.scss';

const PaginationControl = ( { currentPage, handlePageChange, handlePrev, handleNext, numOfPages} ) => {

  const pages = [];

  for(let i = 1; i <= numOfPages; i++) {
    pages.push(i)
  };

  return (
    <div className="page-navbar-team-members row">
      <button className="scroll-left no-bg-btn" onClick={() => handlePrev()}><i className="arrow-left-icon"></i></button> 
      { 
        pages && pages.map(page => <PageNumber value={page} currentPage={currentPage} handleClick={handlePageChange}/>)
      }
      <button className="scroll-right no-bg-btn" onClick={() => handleNext()}><i className="arrow-right-icon"></i></button>
    </div>
  )
};

export default PaginationControl;
