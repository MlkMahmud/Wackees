import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import toggleUser from '../../dispatchers/toggleUser';

const ToggleUserBtn = ({ toggle, children }) => (
  <button
    type="button"
    className="switch_user_role"
    onClick={toggle}
  >
    {children}
  </button>
);

ToggleUserBtn.propTypes = {
  toggle: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const mapDispatchToProps = {
  toggle: toggleUser,
};

export default connect(null, mapDispatchToProps)(ToggleUserBtn);
