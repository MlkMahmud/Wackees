import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LoggedOutNavbar = () => (
  <nav className="navbar">
    <Link className="nav_link" to="/">
      <FontAwesomeIcon className="nav_link_icon" icon="home" />
      HOME
    </Link>
    <Link className="nav_link" to="/login">
      <FontAwesomeIcon className="nav_link_icon" icon="sign-in-alt" />
      LOGIN
    </Link>
    <Link className="nav_link end" to="/register">
      <FontAwesomeIcon className="nav_link_icon" icon="user-plus" />
      SIGN UP
    </Link>
  </nav>
);

export default LoggedOutNavbar;
