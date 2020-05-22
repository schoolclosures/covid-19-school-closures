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
            Schoolclosures.org was crafted by a group of 
            volunteers made of teachers, students, full-time 
            workers, and many others. By the likes of people 
            coming together through difficult times, we’ve 
            created a resource to ensure that even though we 
            may not be physically present with each other, 
            we can still be connected to one another.
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
