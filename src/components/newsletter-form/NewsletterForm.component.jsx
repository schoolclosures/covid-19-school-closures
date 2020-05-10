import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './newsletter_form.styles.scss';

const NewsletterForm = ({ subscribeToNewsletter, subscribeStatus }) => {
  const [emailAddress, setEmailAddress] = useState();

  switch(subscribeStatus) {
    case 'success': return <p className="heading">Thank you for subscribing!</p>;
    case 'failure': return <p className="heading">Could not subscribe - please try again later.</p>;
    default: return (
      <div className="newsletter-subscription-holder">
        <p className="heading">Sign up below for updated resources.</p>
        <div className="input-row">
          <input 
            className="newsletter-subscription-input" 
            placeholder="E-mail Address"
            onKeyUp={(event) => event.keyCode === 13 ? subscribeToNewsletter(emailAddress) : setEmailAddress(event.target.value)}
          />
          <i className="fas fa-arrow-right subscribe-button" onClick={() => subscribeToNewsletter(emailAddress)} />
        </div>
      </div>
    );
  }
};

NewsletterForm.defaultProps = {
  subscribeToNewsletter: () => { console.log('default') },
};

NewsletterForm.propTypes = {
  subscribeToNewsletter: PropTypes.func,
  subscribeStatus: PropTypes.string,
}

export default NewsletterForm;
