import React from 'react';
import './contact_card.styles.scss'

const ContactCard = ({ contactChannel, contactDetail }) => {
  return (
    <div className="contact-card">
      <h2 className="contact-channel">{contactChannel}</h2>
      <p className="contact-detail">
        {contactDetail}
      </p>
    </div>
  )
};

export default ContactCard;
