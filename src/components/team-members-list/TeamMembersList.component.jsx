import React, { useState, useEffect } from 'react';
import TeamMember from '../team-member/TeamMember.component';
import PropTypes from 'prop-types';
import './team_member_list.styles.scss';
import PaginationControl from './pagination/pagination-controls/PaginationControl.component';


const TeamMembersList = ( { teamMembers } ) => { 
  // 8 items per page 
  const numPerPage = 8;
  const numOfPages = Math.ceil(teamMembers.length/numPerPage);
  const [currentPage, changePage] = useState(1);
  const [lowerBound, setLowerBound] = useState(0);
  const [currentPageMembers, changeMembers] = useState(teamMembers.slice(0, numPerPage));
  const [upperBound, setUpperBound] = useState(numPerPage);

  function handlePageChange(value) {
    changePage(value)
    setLowerBound(numPerPage * (value - 1));
    setUpperBound(numPerPage * value);
  }
  
  useEffect(()=> {
    changeMembers(teamMembers.slice(lowerBound, upperBound));
  }, [teamMembers, upperBound, lowerBound]);

  function prevPage() {
    if (currentPage > 1) {
      changePage(currentPage-1);
      setLowerBound(lowerBound - numPerPage);
      setUpperBound(upperBound - numPerPage);
    }
  }

  function nextPage() {
    if (currentPage < numOfPages) {
      changePage(currentPage+1);
      setLowerBound(lowerBound + numPerPage);
      setUpperBound(upperBound + numPerPage);
    }
  }
  
  return (
      <>
        <h2 className="sub-heading pink-underline">Who we are</h2>
        <div className="row-with-wrap team-members-list"> 
          { currentPageMembers && currentPageMembers.map( teamMember => <TeamMember key={teamMember.attrs.id} teamMember={teamMember} /> ) }
        </div>
        <PaginationControl 
          items={teamMembers}
          numPerPage={8}
          handlePageChange={handlePageChange}
          upperBound={upperBound}
          lowerBound={lowerBound}
          handleNext={nextPage}
          handlePrev={prevPage}
          numOfPages={numOfPages}
          currentPage={currentPage}
        />
      </>
    )
};

TeamMembersList.defaultProps = {
  teamMembers: [],
};

TeamMembersList.propTypes = {
  teamMembers: PropTypes.arrayOf(PropTypes.objectOf(String)),
}

export default TeamMembersList;
