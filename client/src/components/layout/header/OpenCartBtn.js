import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { openShoppingCart } from '../../../utils/handlers';

const OpenCartBtn = ({ btnClass, itemsAdded }) => (
  <button
    type="button"
    className={btnClass}
    onClick={openShoppingCart}
  >
    CART
    <sup>
      {itemsAdded}
    </sup>
  </button>
);

OpenCartBtn.propTypes = {
  btnClass: PropTypes.string.isRequired,
  itemsAdded: PropTypes.number.isRequired,
};

const mapStateToProps = ({ currentUser }) => ({
  itemsAdded: currentUser.cart.length,
});

export default connect(mapStateToProps)(OpenCartBtn);
