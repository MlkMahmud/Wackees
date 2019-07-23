import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import '../Layout.css';

const ErrorPrompt = ({ error }) => {
  if (error) {
    return (
      <div className="error_prompt">
        <b className="error_message">
          {error.message}
          {' '}
          <FontAwesomeIcon icon="frown" />
        </b>
      </div>
    );
  }

  return null;
};

ErrorPrompt.defaultProps = {
  error: null,
};

ErrorPrompt.propTypes = {
  error: PropTypes.shape(),
};

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps)(ErrorPrompt);
