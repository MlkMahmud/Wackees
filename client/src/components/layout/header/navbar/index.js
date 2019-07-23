import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DefaultNavbar from './DefaultNavbar';
import CustomerNavbar from './CustomerNavbar';
import RestaurantNavbar from './RestaurantNavbar';

const Navbar = ({ user }) => {
  let nav;
  switch (user.role) {
    case 'Customer':
      nav = <CustomerNavbar />;
      break;
    case 'Restaurant':
      nav = <RestaurantNavbar />;
      break;
    default:
      nav = <DefaultNavbar />;
  }
  return (
    <nav className="navbar">
      {nav}
    </nav>
  );
};

Navbar.propTypes = {
  user: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  user: state.currentUser,
});

export default connect(mapStateToProps)(Navbar);
