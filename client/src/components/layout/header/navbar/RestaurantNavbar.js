import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogoutBtn from '../LogoutBtn';

const RestaurantNavbar = () => (
  <>
    <Link className="nav_link" to="/">
      <FontAwesomeIcon className="nav_link_icon" icon="home" />
      HOME
    </Link>
    <Link className="nav_link" to="/dashboard">
      DASHBOARD
    </Link>
    <Link className="nav_link" to="/orders">
      ORDERS
    </Link>
    <LogoutBtn
      btnType="nav_link end"
    >
      <FontAwesomeIcon className="nav_link_icon" icon="sign-out-alt" />
      LOGOUT
    </LogoutBtn>
  </>
);

export default RestaurantNavbar;
