import React from 'react';
import { Link } from 'react-router-dom';

const CustomerMenu = () => (
  <nav className="hamburgermenu_nav">
    <div className="hamburgermenu_nav_link_container">
      <Link to="/" className="hamburgermenu_nav_link">
        Home
      </Link>
    </div>
    <div className="hamburgermenu_nav_link_container">
      <Link to="/restaurants" className="hamburgermenu_nav_link">
        Order
      </Link>
    </div>
    <div className="hamburgermenu_nav_link_container">
      <button type="button" className="hamburgermenu_nav_link">
        Cart
        <sup>0</sup>
      </button>
    </div>
    <div className="hamburgermenu_nav_link_container">
      <button type="button" className="hamburgermenu_nav_link">
        Logout
      </button>
    </div>
  </nav>
);


export default CustomerMenu;
