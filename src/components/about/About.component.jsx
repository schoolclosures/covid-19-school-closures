import React, { Component } from 'react';
import './about.styles.scss';
import PropTypes from 'prop-types';
import TeamMembersList from '../../containers/team-members-list/TeamMembersList.container';
import PartnersList from '../partners/partners-list/PartnersList.component';

class About extends Component {

  componentDidMount() {
    const { fetchTeamMembers } = this.props;
    fetchTeamMembers();
  }
  
  render() {
    return (
      <div className="about-section column">
        <div className="about-intro section column">
          <h2 className="main-heading heading">Education doesn’t stop when schools close.</h2>
          <h2 className="sub-heading heading pink-underline">About Us</h2>
          <p className="about-summary">
            On March 9th, we realized millions of families were facing the prospect of having to teach their kids from home for the first time. As parents and educators, we wanted to find a way to help families through this difficult transition and beyond. We saw a lot of efforts getting started, but no unified response to the crisis. We knew a centralized place for information and support was critical.
 
            We reached out to our friends with experience in education, food services, financial security and emotional support services to coordinate efforts to help families. Overnight, we launched a free helpline staffed by volunteers with expertise in remote learning. Parents and teachers across the country started calling in and asking for help. In our first week, we were able to provide a Chromebook to a family in Florida, groceries to a mom with a new baby in California and a volunteer tutor to a family with special needs children. 
 
            Since then, our coalition has grown to over 200 volunteers and 150 organizations including the Crisis Text Line, Khan Academy and Revolution Foods. Through our hotline and the information on our website, our goal is to make sure every family and teacher knows there is a place to get help and emotional support. We are committed to every person that reaches out to us - holding their hand until they find a solution to whatever problem they are facing, whether it is customizing their learning plan, finding a laptop or a healthy meal.
          </p>
        </div>
  
        <div className="who-we-are section column">
          <TeamMembersList />
        </div>
  
        <div className="our-partners-section column">
          <h2 className="sub-heading pink-underline">Our Partners</h2>
          <PartnersList />
        </div>
      </div>
    )
  }
};

About.defaultProps = {
  fetchTeamMembers: () => {},
};

About.propTypes = {
  fetchTeamMembers: PropTypes.func,
}

export default About;
