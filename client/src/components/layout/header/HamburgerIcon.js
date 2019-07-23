import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { openDropdownMenu } from '../../../utils/handlers';

const HamburgerIcon = () => (
  <button
    onClick={openDropdownMenu}
    type="button"
    className="hamburger_icon_btn"
  >
    <FontAwesomeIcon className="nav_link_icon hamburger_icon" icon="bars" />
  </button>
);

export default HamburgerIcon;
