import React from 'react';
import './contact_info.styles.scss';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <p className="heading">Seeking support from a fellow parent?</p>
      <div className="column contact-detail">
        <i className="phone-icon"></i>
        <p className="sub-text">(855) 264-2051</p>
      </div>
      <div className="column contact-detail">
        <i className="email-icon"></i>
        <p className="sub-text">manisha@modulo.app</p>
      </div>
    </div>
  )
};

export default ContactInfo;
