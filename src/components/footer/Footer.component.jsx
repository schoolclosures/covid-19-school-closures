import React from 'react';
import { Link } from 'react-router-dom';
import './footer.styles.scss';
import SocialIcons from '../social-icons/SocialIcons.component';
import NewsletterForm from '../newsletter-form/NewsletterForm.component';

const Footer = () => {
  return(
    <div className="footer column">
      <div className="hotline">
        <h2 className="heading">Hotline:</h2>
        <h2 className="sub-text">(145) - 243 - 7809</h2>
      </div>

      <div className="school-closures row"><i className="home-icon"></i> <p>schoolclosures.org</p></div>

      <div className="footer-links-holder column">
        <Link className="footer-link" to="/">Home</Link>
        <Link className="footer-link" to="/for-parents">For Parents</Link>
        <Link className="footer-link" to="/for-teachers">For Teachers</Link>
        <Link className="footer-link" to="#">About Us</Link>
        <Link className="footer-link" to="/contact">Contact Us</Link>
      </div>

      <NewsletterForm />
  
      <SocialIcons />      

      <div className="copyright-info"><p>2020 schoolclosures.org. All rights reserved.</p></div>
    </div>
  )
};

export default Footer;