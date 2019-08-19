import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCartTotal } from '../../../utils/helpers';

const CheckoutFormFooter = ({ total }) => (
  <>
    <div className="total_billed">
      <span>Total Billed:</span>
      <span>
        {total}
      </span>
    </div>
    <button
      type="submit"
      className="confirm_payment"
    >
      <FontAwesomeIcon icon="arrow-right" />
    </button>
  </>
);

CheckoutFormFooter.propTypes = {
  total: PropTypes.string.isRequired,
};

const mapStateToProps = ({ currentUser }) => ({
  total: getCartTotal(currentUser.cart),
});


export default connect(mapStateToProps)(CheckoutFormFooter);
