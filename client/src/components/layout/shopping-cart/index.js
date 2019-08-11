import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CartHeader from './CartHeader';
import CartItem from './CartItem';
import CartFooter from './CartFooter';

const ShoppingCart = ({ cart }) => (
  <div className="cart">
    <CartHeader />
    <hr />
    {cart.map((item, i) => <CartItem key={item.id + i} item={item} />)}
    <CartFooter />
  </div>
);

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape().isRequired,
  ).isRequired,
};

const mapStateToProps = state => ({
  cart: state.currentUser.cart,
});


export default connect(mapStateToProps)(ShoppingCart);
