import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OpenCartBtn from '../OpenCartBtn';
import LogoutBtn from '../LogoutBtn';

const CustomerNavbar = () => (
  <>
    <Link className="nav_link" to="/">
      <FontAwesomeIcon className="nav_link_icon" icon="home" />
      HOME
    </Link>
    <OpenCartBtn
      btnClass="nav_link"
    />
    <LogoutBtn
      btnType="nav_link end"
    >
      <FontAwesomeIcon className="nav_link_icon" icon="sign-out-alt" />
      LOGOUT
    </LogoutBtn>
  </>
);

export default CustomerNavbar;
