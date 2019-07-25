import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OpenCartBtn from '../OpenCartBtn';

const CustomerNavbar = () => (
  <>
    <Link className="nav_link" to="/">
      <FontAwesomeIcon className="nav_link_icon" icon="home" />
      HOME
    </Link>
    <OpenCartBtn
      btnClass="nav_link"
    />
    <button type="button" className="nav_link end">
      <FontAwesomeIcon className="nav_link_icon" icon="sign-out-alt" />
      LOGOUT
    </button>
  </>
);

export default CustomerNavbar;
