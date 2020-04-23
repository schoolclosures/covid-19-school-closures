import React from 'react';

const SocialIcons = () => {
  return (
    <>
      <div className="footer-social-icons">
      <p className="heading">Find us on social media</p>
      <div className="social-icons row">
        <a href="https://twitter.com/covid19kids" target="_blank" rel="noreferrer noopener">
          <i className="footer-social-icon twitter-icon"></i>
        </a>
        <a href="https://www.facebook.com/schoolclosures" target="_blank" rel="noreferrer noopener">
          <i className="footer-social-icon facebook-icon"></i>
        </a>
        <a href="mailto:manisha@modulo.app">
          <i className="footer-social-icon email-icon"></i>
        </a>
      </div>
      </div>
    </>
  )
};

export default SocialIcons;
