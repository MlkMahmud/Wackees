import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import ToggleUserBtn from '../ToggleUserBtn';
import signIn from '../../../actions/signIn';
import '../authentication.css';

const Login = ({ isCustomer, login, history }) => (
  <form onSubmit={e => login(e, history)} name="login" className="login_form">
    <h2 className="login_form_welcome_message">Welcome Back</h2>
    <div className="user_icon_container">
      <FontAwesomeIcon icon="user-alt" className="user_icon" />
    </div>
    <div id="email">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" autoComplete="email" type="email" required="required" />
    </div>
    <div className="password_input_container">
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" autoComplete="current-password" type="password" required="required" />
    </div>
    <button className="auth_submit_btn" type="submit">
      <FontAwesomeIcon icon="arrow-right" />
    </button>
    <button
      type="button"
      className="lost_password"
    >
      Forgot Password
    </button>
    <span className="or">OR</span>
    <ToggleUserBtn>
      {isCustomer ? 'Login as restaurant' : 'Login as customer'}
    </ToggleUserBtn>
  </form>
);

Login.propTypes = {
  isCustomer: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = ({ isCustomer }) => ({
  isCustomer,
});

const mapDispatchToProps = {
  login: signIn,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
