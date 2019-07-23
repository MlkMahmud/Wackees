import React from 'react';
import { Link } from 'react-router-dom';

const DefaultMenu = () => (
  <nav className="hamburgermenu_nav">
    <div className="hamburgermenu_nav_link_container">
      <Link
        to="/"
        className="hamburgermenu_nav_link"
      >
        Home
      </Link>
    </div>
    <div className="hamburgermenu_nav_link_container">
      <Link
        to="/restaurants"
        className="hamburgermenu_nav_link"
      >
        Order
      </Link>
    </div>
    <div className="hamburgermenu_nav_link_container">
      <Link
        to="/login"
        className="hamburgermenu_nav_link"
      >
        Login
      </Link>
    </div>
    <div className="hamburgermenu_nav_link_container">
      <Link
        to="/register"
        className="hamburgermenu_nav_link"
      >
        Sign up
      </Link>
    </div>
  </nav>
);

export default DefaultMenu;
