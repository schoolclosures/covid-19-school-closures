import React, { useState, useEffect }                                          from 'react';
import TeamMember from '../team-member/TeamMember.component';
import PropTypes from 'prop-types';
import './team_member_list.styles.scss';


const TeamMembersList = ( { teamMembers} ) => { 
  // 10 images per page 
  const numPages = Math.ceil(teamMembers.length/10);
  const [currPage, changePage] = useState(1);
  const [currentPageMembers, changeMembers] = useState(teamMembers.slice(0, 10));
  
  useEffect(()=> {
    if (currPage == 1) {
      changeMembers(teamMembers.slice(0, 10));
    }
    else if (currPage == 2) {
      changeMembers(teamMembers.slice(10, 20));
    }
    else if (currPage == 3) {
      changeMembers(teamMembers.slice(20, 30));
    }
    else if (currPage == 4) {
      changeMembers(teamMembers.slice(30, 40));
    }
    else if (currPage == 5) {
      changeMembers(teamMembers.slice(40, 50));
    }
    else if (currPage == 6) {
      changeMembers(teamMembers.slice(50, 60));
    }
    else if (currPage == 7) {
      changeMembers(teamMembers.slice(60, 70));
    }
    else if (currPage == 8) {
      changeMembers(teamMembers.slice(70));
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
