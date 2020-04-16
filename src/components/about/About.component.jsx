import React from 'react';
import './about.styles.scss';
import TeamMembersList from '../team-members/team-members-list/TeamMembersList.componentt';
import PartnersList from '../partners/partners-list/PartnersList.component';

const About = () => {
  return (
    <div className="about-section column">
      <div className="about-intro section column">
        <h2 className="main-heading heading">Education doesn’t stop when schools close.</h2>
        <h2 className="sub-heading heading pink-underline">About Us</h2>
        <p>
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

      <div className="partners column">
        <PartnersList />
      </div>
    </div>
  )
};

export default About;
