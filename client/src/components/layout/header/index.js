import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logo from './Logo';
import Navbar from './navbar';
import DropdownMenu from './dropdown-menu';
import HamburgerIcon from './HamburgerIcon';
import ErrorPrompt from '../ErrorPrompt';
import ShoppingCart from '../shopping-cart';
import { changeHeaderBG } from '../../../utils/handlers';
import '../Layout.css';


const Header = ({ user }) => {
  useEffect(() => changeHeaderBG(), []);
  return (
    <header className="header">
      <Logo />
      <Navbar />
      <HamburgerIcon />
      <DropdownMenu />
      <ErrorPrompt />
      {user.role === 'Customer' ? (<ShoppingCart />) : null}
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.shape().isRequired,
};

const mapStateToProps = ({ currentUser }) => ({
  user: currentUser,
});


export default connect(mapStateToProps)(Header);
