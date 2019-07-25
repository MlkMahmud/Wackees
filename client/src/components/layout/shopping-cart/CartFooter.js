import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCartTotal } from '../../../utils/helpers';

const CartFooter = ({ cartTotal, totalItems }) => (
  <div className="proceed_to_checkout">
    <div className="total">
      <span className="total_items">
        <b>{totalItems}</b>
        {' '}
        Item(s)
      </span>
      <span className="total_price">
        Total:
        {' '}
        <b>{cartTotal}</b>
      </span>
    </div>
    <button type="button" className="proceed_to_checkout_btn">
      CHECKOUT
    </button>
  </div>
);

CartFooter.propTypes = {
  cartTotal: PropTypes.string.isRequired,
  totalItems: PropTypes.number.isRequired,
};

const mapStateToProps = ({ currentUser }) => ({
  cartTotal: getCartTotal(currentUser.cart),
  totalItems: currentUser.cart.length,
});

export default connect(mapStateToProps)(CartFooter);
