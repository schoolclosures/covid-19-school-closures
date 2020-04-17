import React from 'react';
import './contact_info.styles.scss';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p className="heading">Seeking support from a fellow parent?</p>
      <div className="row contact-detail">
        <i className="phone-icon"></i><p className="sub-text">(145) - 243 - 7809</p>
      </div>
      <div className="row contact-detail">
        <i className="email-icon"></i><p className="sub-text">hello@schoolclosures.org</p>
      </div>
    </div>
  )
};

export default ContactInfo;