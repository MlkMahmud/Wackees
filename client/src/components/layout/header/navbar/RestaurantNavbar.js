import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RestaurantNavbar = () => (
  <>
    <Link to="/" className="logo">
      Wackees
    </Link>
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
    <FontAwesomeIcon className="nav_link_icon hamburger_icon" icon="bars" />
  </>
);

export default RestaurantNavbar;
