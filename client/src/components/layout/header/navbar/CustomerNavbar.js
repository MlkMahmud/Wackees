import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomerNavbar = () => (
  <nav className="navbar">
    <Link className="nav_link" to="/">
      <FontAwesomeIcon className="nav_link_icon" icon="home" />
      HOME
    </Link>
    <button type="button" className="nav_link">
      CART
      <sup>0</sup>
    </button>
    <button type="button" className="nav_link end" to="#">
      <FontAwesomeIcon className="nav_link_icon" icon="sign-out-alt" />
      LOGOUT
    </button>
  </nav>
);

export default CustomerNavbar;
