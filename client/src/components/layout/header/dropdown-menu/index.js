import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CloseMenuBtn from './CloseMenuBtn';
import ProfilePic from './ProfilePic';
import CustomerMenu from './CustomerMenu';
import RestaurantMenu from './RestaurantMenu';
import DefaultMenu from './DefaultMenu';
import { closeDropdownMenu } from '../../../../utils/handlers';

const DropdownMenu = ({ user }) => {
  let menu;
  switch (user.role) {
    case 'Restaurant':
      menu = <RestaurantMenu />;
      break;
    case 'Customer':
      menu = <CustomerMenu />;
      break;
    default:
      menu = <DefaultMenu />;
      break;
  }
  return (
    <div
      className="hamburgermenu"
      onClick={closeDropdownMenu}
    >
      <CloseMenuBtn />
      <ProfilePic />
      {menu}
    </div>
  );
};

DropdownMenu.propTypes = {
  user: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  user: state.currentUser,
});

export default connect(mapStateToProps)(DropdownMenu);
