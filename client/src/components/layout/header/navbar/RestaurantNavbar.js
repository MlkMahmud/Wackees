import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RestaurantNavbar = () => (
  <nav className="navbar">
    <Link className="nav_link" to="/">
      <FontAwesomeIcon className="nav_link_icon" icon="home" />
      HOME
    </Link>
    <Link className="nav_link" to="/dashboard">
      <FontAwesomeIcon className="nav_link_icon" icon="" />
      DASHBOARD
    </Link>
    <Link className="nav_link" to="/orders">
      ORDERS
    </Link>
    <button type="button" className="nav_link end" to="#">
      <FontAwesomeIcon className="nav_link_icon" icon="sign-out-alt" />
      LOGOUT
    </button>
  </nav>
);

export default RestaurantNavbar;
