import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { closeShoppingCart } from '../../../utils/handlers';

const ShoppingCartHeader = () => (
  <header className="cart_header">
    <h2>
      Shopping Cart
      {' '}
      <FontAwesomeIcon icon="shopping-cart" />
    </h2>
    <button
      type="button"
      className="close_cart_btn"
      onClick={closeShoppingCart}
    >
      <FontAwesomeIcon icon="times" />
    </button>
  </header>
);

export default ShoppingCartHeader;
