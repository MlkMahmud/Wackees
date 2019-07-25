import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import signOut from '../../../actions/logout';

const LogoutBtn = ({ children, btnType, logout }) => (
  <button
    type="button"
    className={btnType}
    onClick={logout}
  >
    {children}
  </button>
);

LogoutBtn.propTypes = {
  children: PropTypes.node.isRequired,
  btnType: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  logout: signOut,
};


export default connect(null, mapDispatchToProps)(LogoutBtn);
