import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { closeDropdownMenu } from '../../../../utils/handlers';

const CloseMenuBtn = () => (
  <button
    onClick={closeDropdownMenu}
    type="button"
    className="close_menu_btn"
  >
    <FontAwesomeIcon className="close_menu_btn_icon" icon="times" />
  </button>
);

export default CloseMenuBtn;
