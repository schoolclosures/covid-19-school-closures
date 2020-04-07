import React from 'react';
import './contact_card.styles.scss'

const ContactCard = ({ contactChannel, contactDetail }) => {
  return (
    <div className="contact-card">
      <h2>{contactChannel}</h2>
      <p>
        {contactDetail}
      </p>
    </div>
  )
};

export default ContactCard;
