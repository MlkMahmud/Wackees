import React from 'react';
import { Link } from 'react-router-dom';
import LogoutBtn from '../LogoutBtn';

const RestaurantMenu = () => (
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
        to="/dashboard"
        className="hamburgermenu_nav_link"
      >
        Dashboard
      </Link>
    </div>
    <div className="hamburgermenu_nav_link_container">
      <Link
        to="/orders"
        className="hamburgermenu_nav_link"
      >
        Orders
      </Link>
    </div>
    <div className="hamburgermenu_nav_link_container">
      <LogoutBtn
        btnType="hamburgermenu_nav_link"
      >
        Logout
      </LogoutBtn>
    </div>
  </nav>
);

export default RestaurantMenu;
