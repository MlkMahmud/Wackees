import React, { useEffect } from 'react';
import Logo from './Logo';
import Navbar from './navbar';
import DropdownMenu from './dropdown-menu';
import HamburgerIcon from './HamburgerIcon';
import { changeHeaderBG } from '../../../utils/handlers';
import '../Layout.css';


const Header = () => {
  useEffect(() => changeHeaderBG(), []);
  return (
    <header className="header">
      <Logo />
      <Navbar />
      <HamburgerIcon />
      <DropdownMenu />
    </header>
  );
};

export default Header;
