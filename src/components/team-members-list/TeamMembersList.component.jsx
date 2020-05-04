import React, { useState, useEffect }                                          from 'react';
import TeamMember from '../team-member/TeamMember.component';
import PropTypes from 'prop-types';
import './team_member_list.styles.scss';


const TeamMembersList = ( { teamMembers} ) => { 
  // 8 images per page 
  const numPages = Math.ceil(teamMembers.length/8);
  const [currPage, changePage] = useState(1);
  const [currentPageMembers, changeMembers] = useState(teamMembers.slice(0, 8));
  
  useEffect(()=> {
    if (currPage == 1) {
      changeMembers(teamMembers.slice(0, 8));
    }
    else if (currPage == 2) {
      changeMembers(teamMembers.slice(8, 16));
    }
    else if (currPage == 3) {
      changeMembers(teamMembers.slice(16, 24));
    }
    else if (currPage == 4) {
      changeMembers(teamMembers.slice(24, 32));
    }
    else if (currPage == 5) {
      changeMembers(teamMembers.slice(32, 40));
    }
    else if (currPage == 6) {
      changeMembers(teamMembers.slice(40, 48));
    }
    else if (currPage == 7) {
      changeMembers(teamMembers.slice(48, 56));
    }
    else if (currPage == 8) {
      changeMembers(teamMembers.slice(56, 64));
    }
    else if (currPage == 9) {
      changeMembers(teamMembers.slice(64));
    }
  }, [currPage]);

  function prevPage() {
    if (currPage > 1) {
      changePage(currPage-1);
    }
  }

  function nextPage() {
    if (currPage < numPages) {
      changePage(currPage+1);
      console.log(currPage);
    }
  }
  
  return (
      <>
        <h2 className="sub-heading pink-underline">Who we are</h2>
         <div className="row-with-wrap team-members-list"> 
            { currentPageMembers && currentPageMembers.map( teamMember => <TeamMember key={teamMember.attrs.id} teamMember={teamMember} /> ) }
          </div>
        <div className="page-navbar-team-members">
         <div className="scroll-left arrow-right-icon" style={{transform: 'rotate(180deg)'}} onClick={() => prevPage()}></div> 
         <div className="page-number" 
          style={{backgroundColor: (currPage == 1) ? '#6FA8FF': null, 
                  color: (currPage == 1) ? '#080808': null}}
          onClick={() => changePage(1)}> 1 </div>
         <div className="page-number" 
          style={{backgroundColor: (currPage == 2) ? '#6FA8FF': null, 
                  color: (currPage == 2) ? '#080808': null}}
          onClick={() => changePage(2)}> 2 </div>
         <div className="page-number" 
          style={{backgroundColor: (currPage == 3) ? '#6FA8FF': null, 
                  color: (currPage == 3) ? '#080808': null}}
          onClick={() => changePage(3)}> 3 </div>
         <div className="page-number" 
          style={{backgroundColor: (currPage == 4) ? '#6FA8FF': null, 
                  color: (currPage == 4) ? '#080808': null}}
          onClick={() => changePage(4)}> 4 </div>
         <div className="page-number" 
          style={{backgroundColor: (currPage == 5) ? '#6FA8FF': null, 
                  color: (currPage == 5) ? '#080808': null}}
          onClick={() => changePage(5)}> 5 </div>
         <div className="page-number" 
         style={{backgroundColor: (currPage == 6) ? '#6FA8FF': null, 
                color: (currPage == 6) ? '#080808': null}}
          onClick={() => changePage(6)}> 6 </div>
         <div className="page-number" 
          style={{backgroundColor: (currPage == 7) ? '#6FA8FF': null, 
                color: (currPage == 7) ? '#080808': null}}
          onClick={() => changePage(7)}> 7 </div>
         <div className="page-number" 
          style={{backgroundColor: (currPage == 8) ? '#6FA8FF': null, 
                color: (currPage == 8) ? '#080808': null}}
          onClick={() => changePage(8)}> 8 </div>
          <div className="page-number" 
          style={{backgroundColor: (currPage == 9) ? '#6FA8FF': null, 
                color: (currPage == 9) ? '#080808': null}}
          onClick={() => changePage(9)}> 9 </div>
         <div className="scroll-right arrow-right-icon" onClick={() => nextPage()}></div>
        </div>
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
