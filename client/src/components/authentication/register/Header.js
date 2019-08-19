import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Header = ({ isCustomer }) => (
  <>
    <h2 className="sign_up_form_welcome_message">
      {isCustomer ? 'Sign up and start ordering your favorite foods today.' : 'Register your restaurant and start selling today.'}
    </h2>
    <div className="name_input_container">
      <label htmlFor="name">
        {isCustomer ? 'Username:' : 'Restaurant Name:'}
      </label>
      <input name="name" type="text" required="required" />
    </div>
  </>
);

Header.propTypes = {
  isCustomer: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ isCustomer }) => ({
  isCustomer,
});

export default connect(mapStateToProps)(Header);
