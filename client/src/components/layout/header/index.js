import React from 'react';
import Logo from './Logo';
import HamburgerIcon from './HamburgerIcon';
import Navbar from './navbar';
import '../Layout.css';

const Header = () => (
  <header className="header">
    <Logo />
    <Navbar />
    <HamburgerIcon />
  </header>
);

export default Header;
