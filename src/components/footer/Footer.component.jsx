import React from 'react';
import { Link } from 'react-router-dom';
import './footer.styles.scss';
import SocialIcons from '../social-icons/SocialIcons.component';
import NewsletterForm from '../../containers/newsletter-form/NewsletterForm';
import ContactInfo from '../contact-info/ContactInfo.component';
import Copyright from '../copyright/copyright.component';

const Footer = () => {
  return(
    <div className="footer column">
      <div className="footer-left">
        <div className="school-closures row"><i className="home-icon"></i> <p>schoolclosures.org</p></div>
        <Copyright />
      </div>
      <div className="footer-center-left">
        <div className="footer-links-holder column">
          <Link className="footer-link" to="/">Home</Link>
          <Link className="footer-link" to="/for-parents">For Parents</Link>
          <Link className="footer-link" to="/for-teachers">For Teachers</Link>
          <Link className="footer-link" to="/about">About Us</Link>
          <Link className="footer-link" to="/contact">Contact Us</Link>
        </div>
      </div>
      <div className="footer-center-right">
        <ContactInfo />
      </div>

      <div className="footer-right">
        <NewsletterForm />
        <SocialIcons />      
      </div>

      <div className="footer-bottom">
        <Copyright />
      </div>
    </div>
  )
};

export default Footer;