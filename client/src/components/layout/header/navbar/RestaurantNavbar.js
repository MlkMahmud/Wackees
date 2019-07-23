import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RestaurantNavbar = () => (
  <>
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
  </>
);

export default RestaurantNavbar;
