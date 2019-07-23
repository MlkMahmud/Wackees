import React from 'react';
import Logo from './Logo';
import Navbar from './navbar';
import DropdownMenu from './dropdown-menu';
import HamburgerIcon from './HamburgerIcon';
import '../Layout.css';


const Header = () => (
  <header className="header">
    <Logo />
    <Navbar />
    <HamburgerIcon />
    <DropdownMenu />
  </header>
);

export default Header;
