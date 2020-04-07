import React from 'react';
import './newsletter_form.styles.scss';

const NewsletterForm = () => {
  return (
    <div className="newsletter-subscription-holder">
      <p className="heading">Sign up below for updated resources.</p>
      <input className="newsletter-subscription-input" placeholder="Email Address"/>
    </div>
  )
};

export default NewsletterForm;
