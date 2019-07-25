import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from './CheckoutFormHeader';
import Body from './CheckoutFormBody';
import Footer from './CheckoutFormFooter';
import cartCheckout from '../../../actions/cartCheckout';

const CheckOutForm = ({ cart, checkout }) => (
  <form
    className="checkout_form"
    onSubmit={e => checkout(e, cart)}
  >
    <Header />
    <Body />
    <Footer />
  </form>
);

CheckOutForm.propTypes = {
  checkout: PropTypes.func.isRequired,
  cart: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};

const mapStateToProps = ({ currentUser }) => ({
  cart: currentUser.cart,
});

const mapDispatchToProps = {
  checkout: cartCheckout,
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutForm);
