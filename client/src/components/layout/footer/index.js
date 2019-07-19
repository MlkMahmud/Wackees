import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Layout.css';

const Footer = () => (
  <footer className="footer">
    <Link to="/register" className="footer_details">
      Start Selling Today
    </Link>
    <Link to="/terms" className="footer_details">
      Terms and Conditions
    </Link>
    <Link to="/privacy" className="footer_details">
      Privacy Policy
    </Link>
    <Link to="/contact" className="footer_details">
      Get in Touch
    </Link>
    <div className="footer_social_media_icons_container">
      <i className="footer_social_media_icon">
        {' '}
        <FontAwesomeIcon size="sm" icon="envelope" />
      </i>
      <i className="footer_social_media_icon">
        {' '}
        <FontAwesomeIcon size="sm" icon={['fab', 'twitter']} />
      </i>
      <i className="footer_social_media_icon">
        {' '}
        <FontAwesomeIcon size="sm" icon={['fab', 'facebook']} />
      </i>
      <i className="footer_social_media_icon">
        {' '}
        <FontAwesomeIcon size="sm" icon={['fab', 'instagram']} />
      </i>
      <i className="footer_social_media_icon">
        {' '}
        <FontAwesomeIcon size="sm" icon={['fab', 'snapchat']} />
      </i>
    </div>
    <span className="footer_copyright">
      © Copyright 2019 Wackees is a registered trademark
    </span>
  </footer>
);

export default Footer;
