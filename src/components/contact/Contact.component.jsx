import React from 'react';
import ContactCard from './contact-card/ContactCard.component';
import './contact.styles.scss';

const Contact = () => {
  return (
    <div className="contact-section section column">
      <div className="contact-section-intro column">
        <h1 className="heading pink-underline">Stay connected through hard times.</h1>
        <p className="sub-text">
          Our group of volunteers are here to be a 
          resource and answer any of your questions.  
          We want to be a friend to talk to during 
          this tough time, feel free to give us a call.
        </p>
      </div>

      <div className="contact-card-holder column">
        <ContactCard contactChannel={"Email"} contactDetail={"schoolclosures@gmail.com"}/>
        <ContactCard contactChannel={"Twitter"} contactDetail={"@covid19kids"}/>
        <ContactCard contactChannel={"Facebook"} contactDetail={"covid19kids"}/>
      </div>
    </div>
  )
};

export default Contact;
