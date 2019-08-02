import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './Header';
import ToggleUserBtn from '../ToggleUserBtn';
import signUp from '../../../actions/signUp';
import '../authentication.css';

const Register = ({ isCustomer, register, history }) => (
  <form onSubmit={e => register(e, history)} name="register" className="sign_up_form">
    <Header />
    <div className="email_input_container">
      <label htmlFor="email">Email:</label>
      <input name="email" type="email" required="required" />
    </div>
    <div id="password_input_container">
      <label htmlFor="password">Password:</label>
      <input name="password" type="password" required="required" />
    </div>
    <button className="auth_submit_btn" type="submit">
      <FontAwesomeIcon icon="arrow-right" />
    </button>
    <Link to="/login" className="lost_password">
      Already have an account? Login
    </Link>
    <span className="or">OR</span>
    <ToggleUserBtn>
      Sign up as a
      {' '}
      {isCustomer ? 'restaurant' : 'customer'}
    </ToggleUserBtn>
  </form>
);

Register.propTypes = {
  isCustomer: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ isCustomer }) => ({
  isCustomer,
});

const mapDispatchToProps = {
  register: signUp,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
