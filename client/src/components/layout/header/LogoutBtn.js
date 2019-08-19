import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import signOut from '../../../dispatchers/logout';

const LogoutBtn = ({
  children, btnType, logout, history,
}) => (
  <button
    type="button"
    className={btnType}
    onClick={() => logout(history)}
  >
    {children}
  </button>
);

LogoutBtn.propTypes = {
  children: PropTypes.node.isRequired,
  btnType: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

const mapDispatchToProps = {
  logout: signOut,
};


export default withRouter(connect(null, mapDispatchToProps)(LogoutBtn));
